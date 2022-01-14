
//Not Using This



// const express = require('express'); //Line 1
// const mongoose = require('mongoose')
// const app = express(); //Line 2

// const NftModel = require('./src/models/createnft')

// app.use(express.json());

// mongoose.connect("mongodb+srv://merissab44:Tigers98@tillinft.jj0oh.mongodb.net/tillienft?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// })
// const port = process.env.PORT || 3001; //Line 3
// // This displays message that the server running and listening to specified port

// app.get('/', async (req, res) => {
//     const nft = new NftModel({ id: 1, title: 'Test title', file: 'test file', price: 1, description: 'test description'})

//     try {
//         await nft.save()
//         res.send('inserted data')
//     } catch(err) {
//         console.log(err)
//     }
// })
// app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
// // create a GET route
// app.get('/', (req, res) => { //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// }); //Line 11