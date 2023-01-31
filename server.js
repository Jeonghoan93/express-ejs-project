express = require('express');
app = express();

// ejs view engine
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
})

const userRouter = require('./routes/users');
const listingRouter = require('./routes/listings');

app.use('/users', userRouter);
app.use('/listings', listingRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})