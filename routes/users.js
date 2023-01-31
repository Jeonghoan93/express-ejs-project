express = require('express');
userRouter = express.Router();


userRouter.get('/', (req, res) => {
   res.json({ message: "Welcome to PartyX users page." });
})

userRouter.get('/new', (req, res) => {
    res.json({ message: "Welcome to PartyX new users page." });
})

module.exports = userRouter;