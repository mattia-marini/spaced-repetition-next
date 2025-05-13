import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectMongoDB from "./libs/mongodb";
import User from "./models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { type: "password", label: "Password" }
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        if (!credentials?.username || !credentials.password) return null;

        await connectMongoDB();
        const user = await User.findOne({ username: credentials.username }).select('+password')

        if (!user) return null;

        if (credentials.password != user.password) {
          console.log(credentials.password, user.password);
          return null;
        }

        return { id: user._id.toString(), username: user.username };
      }
    },
    )
  ],
})
