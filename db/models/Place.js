import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  name: String,
  location: String,
  image: String,
  mapURL: String,
  decription: String,
});

const Place = mongoose.model.Place || mongoose.model("Place", placeSchema);

export default Place;
