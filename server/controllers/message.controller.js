import { User } from "../models/User.model.js";
import { Conversation } from "../models/Conversation.model.js";
import { Message } from "../models/Message.model.js";
import ApiError from "../../server-chatapp/utils/ApiError.js";
import { asyncHandler } from "../../server-chatapp/utils/asyncHandler.js";

const sendMessage = asyncHandler(async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    //   console.log("Message is being send to", id);
    const { message } = req.body;
    const senderId = req.user._id;

    // console.log(`User ${receiverId} has send the message to ${senderId}: ${message}`);

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Than this
    // await conversation.save();
    // await message.save();

    //Run this as it runs parallely and thus faster
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error.message);
    throw new ApiError(401, "Internal Server Error");
  }
});

const getMessage = asyncHandler(async (req, res) => {
  try {
    const { id: recieverChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, recieverChatId],
      },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log(error.message);
    throw new ApiError(401, "Internal Server Error");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const allUsers = await User.find({
      _id: {
        $ne: currentUserId,
      },
    });
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error.message);
    throw new ApiError(403, "Internal Server Error");
  }
});

export { sendMessage, getMessage, getUsers };
