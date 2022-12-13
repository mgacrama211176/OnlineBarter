import connectMongo from "../../../library/database/connection";
import Users from "../../../models/UserSchema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  //   const connect = await connectMongo();
  connectMongo().catch((error) => res.json({ error: "Connection Failed..!" }));

  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (!req.body) {
      return res.status(404).json({ message: "Data Not Found" });
    }

    if (
      !name ||
      (!email && !email.includes("@")) ||
      (!password && password.length < 8) ||
      password.length > 20
    ) {
      return res.status(402).json({ message: "Invalid Data" });
    }

    //check duplicates
    const checkDuplicate = await Users.findOne({ email });
    if (checkDuplicate)
      return res.status(422).json({ message: "User Already Exist..!" });

    //hash password
    Users.create(
      { name, email, password: await hash(password, 12) },
      function (err, data) {
        if (err) return res.status(404).json({ err });

        res.status(201).json({ status: true, user: data });
      }
    );
  }
}
