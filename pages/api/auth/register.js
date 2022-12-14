import connectMongo from "../../../library/database/connection";
import Users from "../../../models/UserSchema";

export default async function handler(req, res) {
  //   const connect = await connectMongo();
  connectMongo().catch((error) => res.json({ error: "Connection Failed..!" }));

  if (req.method === "POST") {
    const { fullName: name, email, password, cpassword } = req.body;
    console.log(req.body);

    if (!req.body) {
      return res.status(404).json({ message: "Data Not Found" });
    }

    //check duplicates
    const checkDuplicate = await Users.findOne({ email });
    if (checkDuplicate)
      return res.status(422).json({ message: "User Already Exist..!" });

    console.log(name);
    //hash password
    Users.create({ name, email, password }, function (err, data) {
      if (err) return res.status(404).json({ message: err.message });

      data.password = undefined;
      res.status(201).json({ status: true, data: data });
    });
  }
}
