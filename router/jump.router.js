const router = require("express").Router();


router.put("/right", (req, res) => {
  res.json({ message: "Jump right" });
}
);

router.put("/left", (req, res) => {
  res.json({ message: "Jump left" });
}
);

module.exports = router;