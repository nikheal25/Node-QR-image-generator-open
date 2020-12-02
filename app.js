var qr = require("qr-image");

const parse = require("csv-parse");
const fs = require("fs");

const data = [];
fs.createReadStream("./new.csv")
  .pipe(parse({ delimiter: "," }))
  .on("data", (r) => {
    // console.log(r[0]);
    data.push(`${r[0]}`);
  })
  .on("end", () => {
    // console.log(data);
    console.log(typeof data);

    data.forEach((element) => {
      var qr_svg = qr.image(element, { type: "png" });
      qr_svg.pipe(require("fs").createWriteStream(`./uploads/${element}.png`));
    });
  });

// const codes = ["123", "234"];

// codes.forEach((element) => {
//   var qr_svg = qr.image(element, { type: "png" });
//   qr_svg.pipe(require("fs").createWriteStream(`./uploads/${element}.png`));
// });

// var qr_svg = qr.image("I love QR!", { type: "png" });
// qr_svg.pipe(require("fs").createWriteStream("i_love_qr.png"));

// var svg_string = qr.imageSync("I love QR!", { type: "svg" });
