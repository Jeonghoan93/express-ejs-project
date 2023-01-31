express = require('express');
listingRouter = express.Router();

listingRouter.get('/', (req, res) => {
    res.json({ message: "Welcome to PartyX listings page." });
})

listingRouter.get('/new', (req, res) => {
    res.json({ message: "Welcome to PartyX new listings page." });
})

module.exports = listingRouter;