const express = require('express');
const path = require('path');
const fs = require("fs");
const apiRoutes = require('./routes/api_routes');
const htmlRoutes = require('./routes/html_routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});