import mongoose from "mongoose";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const allUsers = await User.find();
    return NextResponse.json({
      status: "SUCCESS",
      data: allUsers,
    });
  } catch (error) {
    return NextResponse.json({
      status: "FAILURE",
      error: error,
    });
  }
}
