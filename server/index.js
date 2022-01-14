const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ListModel = require("./models/listnft");

/// DATABASE CONNECTION
mongoose.connect(
  "mongodb+srv://merissab44:Tigers98@tillinft.jj0oh.mongodb.net/tillienft?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
app.get('/', (req, res) => {
    res.send('You are connected!')
})
app.get("/insert", async (req, res) => {
  const nft = new ListModel({ name: "Jessic", id: 2, price: 2.0, description: "test description", forSale: false });
  await nft.save();
  console.log(nft)
  res.send("Inserted DATA");
});

app.get("/read", async (req, res) => {
  ListModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("You are connected!");
});