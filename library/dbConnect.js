import mongoose from "mongoose";

const database = process.env.MONGODB_URI;
const PORT = 4000;

const DBConnect = () => {
  mongoose
    .connect(database, { useNewUrlParser: true })
    .then(() => {
      console.log(`Database Connected`);
    })
    .catch((err) => {
      throw err;
    });
};

DBConnect();
