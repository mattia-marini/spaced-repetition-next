import User from "@/models/user"
import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const data = await res.json()
//   return new Response(JSON.stringify(data))
// }


export async function POST(request: NextRequest) {
  const { name, description } = await request.json();
  await connectMongoDB();
  await User.create({ name, description });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const user = await User.find();
  return NextResponse.json({ topics: user });
}
