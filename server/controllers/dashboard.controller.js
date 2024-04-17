import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { DashboardData } from "../models/dashboard.model.js";

const createData = asyncHandler(async (req, res) => {
  const {
    company,
    typeofwork,
    city,
    state,
    pincode,
    workStatus,
    remarks,
    amount,
    managedBy,
    salesBy,
  } = req.body;
  const userId = req.user._id;
  //   console.log(userId, company, typeofwork, city, state, pincode,workStatus, amount);
  if (
    [userId, company, typeofwork, city, state, pincode, amount].some(
      (field) => {
        return !field || field === "";
      }
    )
  ) {
    throw new ApiError(400, `All fields are required`);
  }

  try {
    const data = await DashboardData.create({
      userId,
      company,
      typeofwork,
      city,
      state,
      pincode,
      workStatus,
      remarks,
      amount,
      managedBy,
      salesBy,
    });

    const createdData = await DashboardData.findById(data._id).select();
    if (!createdData) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }
    return res
      .status(200)
      .json(new ApiResponse(200, createdData, "Data Created Successfully"));
  } catch (error) {
    console.log(error.message);
    throw new ApiError(403, "Internal Server Error");
  }
});

const getallData = asyncHandler(async (req, res) => {
  const dashboarddata = await DashboardData.find();
  console.log(dashboarddata);
  return res
    .status(200)
    .json(
      new ApiResponse(200, dashboarddata, "All details recieved successfully")
    );
});

export { createData, getallData };
