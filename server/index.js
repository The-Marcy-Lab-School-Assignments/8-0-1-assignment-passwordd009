// index.js
const express = require('express');
const app = express();
const path = require('path');

const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); 
  };

const pathToDistFolder = path.join(__dirname, '..', 'path', 'to', 'frontend', 'dist');

const serveStatic = express.static(pathToDistFolder);

app.use(logRoutes)
app.use(serveStatic);