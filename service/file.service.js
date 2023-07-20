const {config }= require('../config');
const fs = require('fs');

class FileService {
  constructor() {
    this.basePath = `${process.cwd()}/${config.dataPath}`;
  }

  async createFile(fileName, data = JSON.stringify({})) {
    try {
      await fs.writeFileSync(`${this.basePath}${fileName}`, data);
    } catch (err) {
      console.error('[ERROR - createFile]:', err);
    }
  }
  
  async readFile(fileName) {
    try {
      const data = await fs.readFileSync(
        `${this.basePath}${fileName}`,
        'utf8'
      );
      return JSON.parse(data);
    } catch (err) {
      console.error('[ERROR - readFile]:', err);
    }
  }

  deleteRef(fileName) {
    let deleted = true;
    fs.unlink(`${this.basePath}${fileName}`, (err) => {
      if (err) {
        deleted = false;
        console.error('[ERROR - deleteRef]:', err);
      }
    });

    return deleted;
  }
}

module.exports = FileService;