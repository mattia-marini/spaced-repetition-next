import User from "@/models/user"
import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  await connectMongoDB();
  const formData = await req.formData();
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  await User.create({ username, password });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}
