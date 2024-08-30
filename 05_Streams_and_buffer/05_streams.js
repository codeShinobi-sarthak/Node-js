const fs = require("fs");

const readStream = fs.createReadStream("./blog1.txt", { encoding: "utf8" });
// this create the blog4.txt file if it does not exist and write the data from the readStream to it
const writeStream = fs.createWriteStream("./blog4.txt", { encoding: "utf8" });

// readStream.on("data", (data) => {
//     console.log("---- NEW data ----");
//     console.log(data);
//     writeStream.write("Data writtn from readStream to writeStream\n");
//     writeStream.write(data)
// });

//! piping
readStream.pipe(writeStream); // this does the same thing as the above code