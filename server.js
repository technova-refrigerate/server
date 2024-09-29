import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./connectDB.js";
dotenv.config();

import Product from "./models/productModel.js";
import { initAuth } from "@propelauth/express";
import User from "./models/userModel.js";

const app = express();
const port = process.env.PORT || 8080;
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

const {
  requireUser,
  fetchUserMetadataByUserId,
  // ...
} = initAuth({
  authUrl: process.env.PROPEL_AUTH_URL,
  apiKey: process.env.PROPEL_API_KEY,
});
app.get("/api/whoami", requireUser, (req, res) => {
  res.send("Hello user with ID " + req.userClass.userId);
});

app.get("/api/products/all", requireUser, async (req, res) => {
  try {
    const products = await Product.find({}, "_id Name Name_subtitle");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", requireUser, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products", requireUser, async (req, res) => {
  try {
    let user = await User.findOne({ propelAccessToken: req.user.accessToken });

    if (user) {
      res.json(user.products);
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/products", requireUser, async (req, res) => {
  console.log(req.body);
  const { id, icon, name, subtitle, bestBefore, storageLocation } = req.body;

  try {
    let user = await User.findOne({ propelUserID: req.user.userId });
    console.log("user", user);
    if (!user) {
      console.log("making new user");
      console.log("user", req.user);
      user = new User({
        propelUserID: req.user.userId,
        products: [],
      });
      console.log("new user", user);
    }

    const newProduct = {
      id,
      icon,
      name,
      subtitle,
      bestBefore,
      storageLocation,
    };

    user.products.push(newProduct);
    console.log("user after product", user);

    await user.save();
    console.log("user after save", user);

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
app.listen(port, () => console.log(`Server running on port ${port}`));
