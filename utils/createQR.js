const { AwesomeQR } = require("awesome-qr");
const fs = require("fs");

module.exports.createQR = async (accessToken) => {
    const icon = fs.readFileSync('./assets/images/icon.png');

    const buffer = await new AwesomeQR({
        text: accessToken,
        size: 512,
        logoImage: icon
    }).draw();

    return buffer
}