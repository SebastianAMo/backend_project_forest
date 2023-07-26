const router = require("express").Router();
const { config } = require("../config");
const GameService = require("../service/game.service.js");

const gameService = new GameService();


router.put("/right", async (req, res) => {
  const data = {"x":10,"y":10,"attacking":0,"jumping":true }
  await gameService.updateGameStatus(config.nameFile, data);
  res.json({"Data_update":data});
}
);

router.put("/left", async (req, res) => {
  const data = {"x":-10,"y":10,"attacking":0,"jumping":true }
  await gameService.updateGameStatus(config.nameFile, data);
  res.json({"Data_update":data});
}
);

module.exports = router;