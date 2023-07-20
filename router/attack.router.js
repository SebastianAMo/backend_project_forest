const router = require('express').Router();


router.put('/right', (req, res) => {
  res.json({ message: 'Attack right' });
}
);

router.put('/left', (req, res) => {
  res.json({ message: 'Attack left' });
}
);

module.exports = router;