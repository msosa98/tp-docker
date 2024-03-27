const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user.routes.js');
const handleError = require('./middlewares/error.js');

const app = express();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/appdb';
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRoutes);
app.use(handleError);

mongoose
    .connect(MONGO_URI, {})
    .then(() => {
        app.listen(PORT, () => console.log('Server listen on port', PORT));
    })
    .catch((e) => console.error(e.message));
