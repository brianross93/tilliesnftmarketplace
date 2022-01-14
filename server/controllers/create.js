const CreateNft = require('../models/createnft');

module.exports = (app) => {
    app.post('/list', function(req, res) {

        const nft = new CreateNft(req.body)

        try {
            await nft.save((err, nft) => {
                return res.redirect('/');
            });
        } catch(err) {
            console.log(err)
        } 
        })
}