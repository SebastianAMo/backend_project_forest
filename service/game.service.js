const FileService = require('./file.service');

class GameService extends FileService {
  constructor(){
    super();
  }

  async generateFile(fileName,data){
    await this.createFile(fileName,data);
  }

  async getFile(fileName){
    const data = await this.readFile(fileName);
    return data;
  }

  deleteFile(fileName){
    const isDeleted = this.deleteRef(fileName);
    if(isDeleted){
      return `File ${fileName} deleted`;
    }else{
      return `File ${fileName} not found`;
    }
  }
}

module.exports = GameService;