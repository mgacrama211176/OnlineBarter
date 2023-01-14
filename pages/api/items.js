import connectMongo from "../../library/database/connection";
import Items from "../../models/ItemSchema";

export default async function handler(request, response) {
  // const connect = await connectMongo();
  connectMongo().catch((error) => request.json({ error: "Connection Failed..!" }));

  if (request.method === "POST") {
    const item = request.body;

    Items.create(item, function (err, data) {
      if (err) return response.status(404).json({ message: err.message });
      response.status(200).json({ status: true, data: data });
    });
  }

  if (request.method === "GET") {
    const fetching = await Items.find({});
    response.status(200).json(fetching);
  }
}
