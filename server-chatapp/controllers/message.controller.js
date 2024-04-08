export const sendMessage = (req, res) => {
  try {
    const { id } = req.params;
    //   console.log("Message is being send to", id);
    const { message } = req.body;
    // const senderId=req.user.fname;

    console.log(`User ${id} has send the message: ${message}`);
    res.status(400).json({ message: "Sent Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
