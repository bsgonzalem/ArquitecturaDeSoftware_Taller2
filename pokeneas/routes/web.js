const pokeneaController = require("../src/controllers/pokeneaController");

const webRoutes = (app) => {
    app.get("/api/pokenea", pokeneaController.getRandomPokenea);

    app.get("/pokenea", pokeneaController.getPokeneaPage);
};

module.exports = webRoutes;