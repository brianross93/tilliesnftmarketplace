

const cors = require('cors');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ListModel = require("./models/listnft");

/// DATABASE CONNECTION
mongoose.connect(
  "mongodb+srv://merissab44:Tigers98@tillinft.jj0oh.mongodb.net/tillienft?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('You are connected!')

});
// Inserts a new NFT into the database from the server side
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
// Gets all NFTs from the database
app.get("/read", async (req, res) => {
  ListModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
// Updates a NFT in the database
app.put("/update", async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const price = req.body.price
  const description = req.body.description
  const forSale = req.body.forSale
  
  await ListModel.findOneAndUpdate({ id: id }, { name: name, price: price, description: description, forSale: forSale });
  res.send("Updated DATA");
});
// Deletes a NFT from the database
app.delete("/delete", async (req, res) => {
  const id = req.body.id
  await ListModel.findOneAndDelete({ id: id });
  res.send("Deleted DATA");
});



app.listen(3001, () => {
  console.log("You are connected!");
});