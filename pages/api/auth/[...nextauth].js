import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../library/database/connection";
import Users from "../../../models/UserSchema";
import { compare } from "bcryptjs";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    //CredentialsProvider({name, authorize()})
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await connectMongo().catch((error) =>
          res.json({ error: "Connection Failed..!" })
        );

        // email, password
        const user = await Users.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No User Found");
        }

        const checkPassword = await compare(
          credentials.password,
          user.password
        );

        if (!checkPassword && user.email !== credentials.email) {
          throw new Error("Username or Password doesn't Match");
        }

        return user;
      },
    }),
  ],
};

export default NextAuth(authOptions);
