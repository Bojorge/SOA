const express = require('express');
const MainController = require('./controllers/mainController');
const app = express();
const path = require('path');
//const port = process.env.PORT || 3000;

// Configurar la carpeta "views" para servir archivos estáticos
app.use(express.static('views'));

// Configurar rutas
const mainController = new MainController();

// Servir archivos estáticos CSS y JavaScript cuando se solicite el archivo HTML principal
app.get('/', mainController.getIndex.bind(mainController));
app.get("/login", mainController.getLogin.bind(mainController));





exports.BEGINNING = app;