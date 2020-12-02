var qr = require("qr-image");

const codes = ["123", "234"];

codes.forEach((element) => {
  var qr_svg = qr.image(element, { type: "png" });
  qr_svg.pipe(require("fs").createWriteStream(`${element}.png`));
});

// var qr_svg = qr.image("I love QR!", { type: "png" });
// qr_svg.pipe(require("fs").createWriteStream("i_love_qr.png"));

// var svg_string = qr.imageSync("I love QR!", { type: "svg" });
