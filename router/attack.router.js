const router = require('express').Router();
const { config } = require('../config');
const GameService = require('../service/game.service.js');

const gameService = new GameService();

router.put('/right', async (req, res) => {
  const data = {"x":10,"y":0,"attacking":10,"jumping":false }
  await gameService.updateGameStatus(config.nameFile, data);
  res.json({"Data_update":data}).status(200);
}
);

router.put('/left', async(req, res) => {
  const data = {"x":-10,"y":0,"attacking":-10,"jumping":false }
  await gameService.updateGameStatus(config.nameFile, data);
  res.json({"Data_update":data}).status(200);
}
);

module.exports = router;