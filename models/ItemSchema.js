import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  itemName: { type: String },
  itemImages: { type: String },
  lookingFor: { type: String },
  datePurchased: { type: String },
  category: { type: String },
  address: { type: String },
  preferredMeetup: { type: String },
  itemDescription: { type: String },
});

const Items = models.item || model("item", itemSchema);

export default Items;
