const {config }= require('../config');
const fs = require('fs');

class FileService {
  constructor() {
    this.basePath = `${process.cwd()}/${config.dataPath}`;
  }

  async createFile(fileName, data) {
    try {
      await fs.writeFileSync(`${this.basePath}${fileName}`, JSON.stringify(data));
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

  async updateFile(fileName, data) {
    try {
      await fs.writeFileSync(`${this.basePath}${fileName}`, JSON.stringify(data));
    } catch (err) {
      console.error('[ERROR - updateFile]:', err);
    }
  }

  deleteFile(fileName) {
    let deleted = true;
    fs.unlink(`${this.basePath}${fileName}`, (err) => {
      if (err) {
        console.error('[ERROR - deleteRef]:', err);
        deleted = false;
      }
    });

    return deleted;
  }
}

module.exports = FileService;