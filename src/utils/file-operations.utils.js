const fs = require("fs");
const path = require("path").join(__dirname, "../../data.json");

const writeToFile = (data) => {
  try {
    const readFileRecord = readFile();
    if(status) {

    } else {
        
    }
  } catch (error) {
    console.log(error);
  }
};

const readFile = () => {
  try {
    // reading file using utf-8
    const data = fs.readFileSync(path, "utf8");
    if(data === '') {
        return {
            status: false
        }
    }
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  writeToFile,
  readFile,
};
