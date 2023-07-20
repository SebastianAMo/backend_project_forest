const router = require('express').Router();

const {config} = require('../config');

const GameService = require('../service/game.service.js');
const gameService = new GameService();

router.get('/current',async (req, res, err) => {
  const dataGame = await gameService.getFile(config.nameFile);
  res.json(dataGame);
}
);

router.get('/win', (req, res) => {
  res.json({ message: 'Win' });
}
);

router.delete('/die', (req, res) => {
  const fileStatus = gameService.deleteFile(config.nameFile);
  res.json(fileStatus).status(200);
}
);

router.post('/start', async (req,res, err) => {
  await gameService.generateFile(config.nameFile,{"x":0,"y":0,"attacking":0,"jumping":false});
  res.json({ message: 'Start' });
}
);

module.exports = router;