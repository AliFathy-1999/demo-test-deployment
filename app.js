const express=require('express');
const app=express();
const path = require("path");
const cors = require('cors');
app.use(express.json());
const routes = require('./routes');
app.use(routes)
module.exports = app;


