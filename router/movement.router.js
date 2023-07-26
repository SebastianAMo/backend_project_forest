const router = require("express").Router();
const { config } = require("../config");
const GameService = require("../service/game.service.js");

const gameService = new GameService();

router.put("/up", async (req, res) => {
 const data = await gameService.getGameStatus(config.nameFile);
  if (data){
    data["y"] = data["y"] + 10;
    data["x"] = 0;
    data["attacking"] = 0;
    data["jumping"] = false;
    await gameService.updateGameStatus(config.nameFile, data);
    res.json({"Data_update":data}).status(200);
  }else{
    res.json({ message: 'No Found' }).status(404);
  }  
}
);

router.put("/down", async (req, res) => {
  const data = await gameService.getGameStatus(config.nameFile);
  if (data){
    data["y"] = data["y"] - 10;
    data["x"] = 0;
    data["attacking"] = 0;
    data["jumping"] = false;
    await gameService.updateGameStatus(config.nameFile, data);
    res.json({"Data_update":data});
  }else{
    res.json({ message: 'No Found' }).status(404);
  }
}
);

router.put("/right", async (req, res) => {
  const data = await gameService.getGameStatus(config.nameFile);
  if (data){
    data["x"] = data["x"] + 10;
    data["y"] = 0;
    data["attacking"] = 0;
    data["jumping"] = false;
    await gameService.updateGameStatus(config.nameFile, data);
    res.json({"Data_update":data}).status(200);
  }else{
    res.json({ message: 'No Found' }).status(404);
  }

}
);

router.put("/left", async (req, res) => {
  const data = await gameService.getGameStatus(config.nameFile);
  if (data){
    data["x"] = data["x"] - 10;
    data["y"] = 0;
    data["attacking"] = 0;
    data["jumping"] = false;
    await gameService.updateGameStatus(config.nameFile, data);
    res.json({"Data_update":data}).status(200);
  }else{
    res.json({ message: 'No Found' }).status(404);
  }
}
);


module.exports = router;
