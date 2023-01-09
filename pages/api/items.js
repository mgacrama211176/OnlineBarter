import connectMongo from "../../library/database/connection";
import Items from "../../models/ItemSchema";

export default async function handler(req, res) {
  // const connect = await connectMongo();
  connectMongo().catch((error) => res.json({ error: "Connection Failed..!" }));

  if (req.method === "POST") {
    const item = req.body;

    Items.create(item, function (err, data) {
      if (err) return res.status(404).json({ message: err.message });

      res.status(200).json({ status: true, data: data });
    });
  }

  if (req.method === "GET") {
    const fetching = await Items.find({});
    res.status(200).json(fetching);
  }
}
