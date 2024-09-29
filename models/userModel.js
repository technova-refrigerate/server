import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
//   quantity: {
//     type: Number,
//     required: true,
//     min: 0,
//   },
  bestBefore: {
    type: Date,
    required: false,
  },
  dateStored: {
    type: Date,
    default: Date.now,
  },
  storageLocation: {
    type: String,
    enum: ["Fridge", "Freezer"],
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  propelUserID: {
    type: String,
    required: true,
    unique: true,
  },
  products: [ProductSchema],
});

const User = mongoose.model("User", UserSchema);
export default User;
