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
    console.log(data);
  });
