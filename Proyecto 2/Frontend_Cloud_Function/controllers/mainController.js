// mainController.js
const path = require('path');

class MainController {
  constructor() {}

  getIndex(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/structure/index.html'));
  }

  getLogin(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/structure/login.html'));
  }
}

module.exports = MainController;
