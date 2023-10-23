import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

connect();

export async function POST(req) {
  try {
    const body = await req.json();
    const savedUser = await User.create(body);

    return NextResponse.json({
      status: "SUCCESS",
      data: savedUser,
    });
  } catch (error) {
    return NextResponse.json({
      status: "FAILED",
      message: error,
    });
  }
}
