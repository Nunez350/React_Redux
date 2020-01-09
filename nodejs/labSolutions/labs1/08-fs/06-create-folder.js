const fs = require("fs");

const folderName = '/Users/rohanrajore/Desktop/nodejs'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}
