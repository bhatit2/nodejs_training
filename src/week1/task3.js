import * as fs from "fs";
import * as path from "path";
import csv from "csvtojson";
const csvFilePath = path.resolve(__dirname, "../assets/nodejs-hw1-ex1.csv");
const txtFilePath = path.resolve(__dirname, "../assets/output.txt");

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    fs.writeFile(txtFilePath, JSON.stringify(jsonObj, null, 2), err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });