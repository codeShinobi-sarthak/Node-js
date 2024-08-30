// console.log(global);

// global.setTimeout(() => {
//     console.log("in the timeout");
// }, 2000);

//! global.setTimeout is the same as setTimeout
// ? we dont need to use global.setTimeout as it is explicitly available in the global scope
setTimeout(() => {
    console.log("in the timeout after 2 seconds");
}, 2000);

// gets the current directory path
console.log("directory path : " + __dirname);
// give the full path with the file
console.log("path with file " + __filename);



//! this will give an error as document is not defined as document is not available in node its a browser object
console.log(document);


//  note: we dont require document as we want to run the code in node and not in browser as node help with server side code and not client side code ie backend code and not frontend code
