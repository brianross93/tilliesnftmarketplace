

const cors = require('cors');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ListModel = require("./models/listnft");
require('dotenv').config();

/// DATABASE CONNECTION
mongoose.connect(
  "mongodb+srv://merissab44:Tigers98@tillinft.jj0oh.mongodb.net/tillienft?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.render('index.html');
})


app.post("/insert", async (req, res) => {
  
  const name = req.body.name
  const id = req.body.id
  const price = req.body.price
  const description = req.body.description
  const forSale = req.body.forSale
  

  const nft = new ListModel({ name: name, id: id , price: price, description: description, forSale: forSale });
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

app.listen(process.env.PORT || 3001, () => {
  console.log("You are connected!");
});