const express = require('express');
const morgan = require('morgan');
const frontend = require('./frontend');

const app = express();
app.set('view engine', 'pug');
app.use(morgan('common', { immediate: true }));

const router = express.Router();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/frontend', frontend);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});