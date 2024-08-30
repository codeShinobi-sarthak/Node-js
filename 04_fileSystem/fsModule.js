/**
 * Writes the string "Hello from Node.js" to a file named "hello.txt".
 * If the file already exists, its contents will be overwritten.
 *
 * Appends the string "Hello again from Node.js" to the end of the "hello.txt" file.
 *
 * Reads the contents of the "hello.txt" file and logs it to the console.
 *
 * Deletes the "hello.txt" file.
 */
const fs = require("fs");

if (fs.existsSync("hello.txt")) {
    fs.unlink("hello.txt", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File deleted successfully");
        }
    });
} else {
    fs.writeFileSync("hello.txt", "Hello from Node.js");
    fs.appendFileSync("hello.txt", "    Hello again from Node.js");
    console.log(
        fs.readFileSync("hello.txt", "utf-8", (data) => {
            console.log(data);
        })
    );
}

// ------------------------------------------------------------------------------
// directories or folders

// check if directory exists or not and do as per the condition
if (fs.existsSync("./assets")) {
    console.log("Directory already exists");
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("directory deleted successfully");
        }
    });
} else {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Directory created successfully");
        }
    });
}

//  Explain: if run for the first time then i directory will be create and if run for the second time then directory will be deleted as it alredy exists
