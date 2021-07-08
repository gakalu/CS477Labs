const express = require('express');
const cors = require('cors');
const User = require('./models/user');

const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');

const app = express();

User.init(); //init users array to have 2 users

app.use(cors());
app.use(express.json());

app.use(authRouter); //all urls access after authRouter needs JWT
app.use('/products', productRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

app.listen(3000, () => console.log('listening to 3000...'));