const router = require("express").Router();
const { config } = require("../config");
const GameService = require("../service/game.service.js");

const gameService = new GameService();

router.put("/up", async (req, res) => {
 const data = await gameService.getGameStatus(config.nameFile);
  data["y"] = data["y"] + 10;
  await gameService.updateGameStatus(config.nameFile, data);
  res.json({"Data_update":data});
}
);

router.put("/down", async (req, res) => {
  const data = await gameService.getGameStatus(config.nameFile);
  data["y"] = data["y"] - 10;
  await gameService.updateGameStatus(config.nameFile, data);
  res.json({"Data_update":data});
}
);

router.put("/right", async (req, res) => {
  const data = await gameService.getGameStatus(config.nameFile);
  data["x"] = data["x"] + 10;
  await gameService.updateGameStatus(config.nameFile, data);
  res.json({"Data_update":data});
}
);

router.put("/left", async (req, res) => {
  const data = await gameService.getGameStatus(config.nameFile);
  data["x"] = data["x"] - 10;
  await gameService.updateGameStatus(config.nameFile, data);
  res.json({"Data_update":data});
}
);


module.exports = router;
