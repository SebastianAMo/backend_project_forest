const FileService = require('./file.service');

class GameService extends FileService {
  constructor(){
    super();
  }

  async startGame(fileName,data){
    await this.createFile(fileName,data);
  }

  async getGameStatus(fileName){
    const data = await this.readFile(fileName);
    if (data){
      return data;
    }else{
      return false;
    }
  }

  async updateGameStatus(fileName,data){
    await this.updateFile(fileName,data);
  }

  deleteGameStatus(fileName){
    const isDeleted = this.deleteFile(fileName);
    if(isDeleted){
      return `File ${fileName} deleted`;
    }else{
      return `File ${fileName} not found`;
    }
  }
}

module.exports = GameService;