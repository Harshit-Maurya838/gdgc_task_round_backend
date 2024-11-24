const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main()
  .then(() => console.log("MongoDB connect succesfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

const ItemSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

const Item = mongoose.model("Item", ItemSchema);

app.get("/listing", async (req, res) => {
  try {
    const items = await Item.find();
    res.json({ "data": items });
  } catch (err) {
    console.error(err);
    res.status(404).send({ error: "Failed to fetch items" });
  }
});

app.get("/listing/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const items = await Item.findById(id);
    res.json({ "data": items });
  } catch (err) {
    console.error(err);
    res.status(404).send({ error: "Failed to fetch an item" });
  }
});

app.put("/listing/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const items = await Item.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ "data": items });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: "Failed to update item" });
  }
});

app.post("/listing", async (req, res) => {
  try {
    const data = req.body;
    const items = await Item.insertMany(req.body);
    res.json({ "data": items });
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: "Failed to add item" });
  }
});
app.delete("/listing/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const items = await Item.findByIdAndDelete(id);
    res.json({ "data": items });
  } catch (err) {
    console.error(err);
    res.status(404).send({ error: "Failed to delete an item" });
  }
});

// Hosting Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
