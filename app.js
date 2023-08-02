// const { log, warning, info } = require("./log");

// log("Dilshadkt");
// console.log(warning);
// console.log(info);

///////////// importing module multiple times /////////

// let blog = require("./blog");
// blog = require("./blog");

////// buffer ...................//////////

// const buffer = new Buffer.from("Dilshad");
// console.log(buffer.write("code"));
// console.log(buffer.toString());
// console.log(buffer.toJSON());

///////////////////  fs module  ///////

const fs = require("node:fs/promises");

// fs.writeFile("./greet.txt", "hello Dilshad", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file writed");
//   }
// });
// fs.writeFileSync("./greet.txt", "its me dilshad");
// fs.writeFile("./greet.txt", "its me dilshad", { flag: "a" }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("writed");
//   }
// });

// console.log("first");
// const data = fs.readFileSync("./greet.txt", "utf-8");
// console.log(data);
// console.log("second");
// fs.readFile("./greet.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log("third");

// fs.readFile("./greet.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

/////////// fs promise using normal async function ///////////////

async function readFile() {
  try {
    const data = await fs.readFile("./greet.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
readFile();
