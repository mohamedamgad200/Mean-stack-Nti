// console.log("Hello from node");
// console.log(+process.argv[2] + +process.argv[3]);
import Student from "./student.js";
import { myFunction, yourFunction, myVar } from "./code.js";
import fs from "fs";
// const Student = require("./student.mjs");
// let myStudent = new Student("Amgad", 4, 23);
// console.log(myStudent.getStudentData());
// myFunction();
// yourFunction();
// console.log(myVar);
// const fs = module.require("fs");
// const path = "./new Folder";
//take path and callback function
const path1 = "./new Folder";
fs.mkdir(path1, { recursive: false }, (err) => {
  if (err) {
    console.error(err.message);
    console.log(err.code);
  } else {
    console.log("Folder created");
  }
});
// try {
//   fs.mkdirSync(path);
// } catch (err) {
//   console.log(err);
// }
// const fsPromises = require("fs").promises;
// fsPromises.mkdir(
//   path
//     .then(console.log("folder Created"))
//     .catch((err) => console.log(err.message))
// );
// fs.rename(path, "./newName", () => {});
// fs.rm(path, { recursive: false }, (error) => {
//   if (error) {
//     console.log(error.message);
//   }
// });
const path = "./new Folder/file.txt";
fs.writeFile(path, "Hello from node js", (err) => {});
fs.appendFile(path, "\nhello my brother", (err) => {});
fs.access(path, fs.constants.F_OK, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(path, "Hello right path", (err) => {});
  }
});
fs.readdir(path, (err, files) => {
  console.log(files);
  fs.writeFile("./fileslist.json", JSON.stringify(files), (err) => {
    console.log(err.message);
  });
});
fs.readFile(path, (err) => console.log(err.message));
