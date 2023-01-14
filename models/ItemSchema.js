import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  email: { type: String },
  itemName: { type: String, required: [true, "Please input Item name"] },
  lookingFor: { type: String },
  datePurchased: { type: String },
  category: { type: String },
  address: { type: String, required: [true, "Please input your address"] },
  images: { type: [String] },
  preferredMeetup: { type: String },
  itemDescription: {
    type: String,
    required: [true, "Please input Item description"],
  },
});

const Items = models.item || model("item", itemSchema);

export default Items;
