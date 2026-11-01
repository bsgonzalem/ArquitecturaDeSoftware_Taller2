const os = require("os");
const pokeneas = require("../data/pokeneas");

const getRandomPokenea = (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);

    const pokenea = pokeneas[number];

    res.json({
        id: pokenea.id,
        name: pokenea.name,
        height: pokenea.height,
        ability: pokenea.ability,
        containerId: os.hostname()
    });
};

module.exports = {
    getRandomPokenea
};