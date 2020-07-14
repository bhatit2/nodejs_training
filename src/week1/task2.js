const csv = require("csvtojson");
const fs = require("fs");
const path = require("path");
const csvFilePath = path.resolve(__dirname, "../csv/input.csv");
const txtFilePath = path.resolve(__dirname, "../txt/output.txt");
const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);
const csvToJson = csv({
  colParser: {
    amount: "omit",
    price: "number"
  }
})
  .preFileLine((fileLineString, lineIdx) => {
    if (lineIdx === 0) {
      return fileLineString.toLowerCase();
    }
    return fileLineString;
  })
  .on("error", err => {
    console.log(err);
  });

readStream.pipe(csvToJson).pipe(writeStream);
