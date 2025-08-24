"use server"
import axiosInstance from "@/apis/axiosInstance";

export const getAllFeedbacks = async () => {
  try {
    const res = await axiosInstance("/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
