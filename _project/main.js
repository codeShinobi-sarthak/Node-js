import { readdir } from "node:fs/promises";
import path from "node:path";
import fs from "node:fs";

const __dirname = "D:\\Web development\\Backend\\Code-with-harry\\practice-1";

async function getFiles() {
  try {
    const files = await readdir(__dirname);
    for (const file of files) {
      // console.log(file);
      const ext = path.extname(file);
      if (ext != "" && ext != '.js' && ext != '.json') {
        checkFolder(ext);
        addFile(file, ext);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

function checkFolder(folderName) {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
}

function addFile(file, ext) {
 const oldPath = path.join(__dirname, file); 
 const newPath = path.join(__dirname, ext, file)
 fs.renameSync(oldPath, newPath)
}

getFiles();
