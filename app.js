const express = require('express')
const path = require('path');
const app = express();
const routes = require('./routes/index');

require('dotenv').config();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});

routes.web(app);
