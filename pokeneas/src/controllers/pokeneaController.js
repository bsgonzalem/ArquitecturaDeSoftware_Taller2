const os = require("os");
const pokeneas = require("../data/pokenea");
const path = require("path");

const getRandomPokenea = (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);

    const pokenea = pokeneas[number];

    res.json({
        id: pokenea.id,
        name: pokenea.name,
        height: pokenea.height,
        ability: pokenea.ability,
        imageUrl: pokenea.imageUrl,
        philosophicalPhrase: pokenea.philosophicalPhrase,
        containerId: os.hostname()
    });
};

const getPokeneaPage = (req, res) => {
    res.sendFile(
        path.join(__dirname, "../../resources/views/pokenea.html")
    );
};

module.exports = {
    getRandomPokenea,
    getPokeneaPage
};