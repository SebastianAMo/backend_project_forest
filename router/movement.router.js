const router = require("express").Router();

router.put("/up", (req, res) => {
  res.json({ message: "Move up" });
}
);

router.put("/right", (req, res) => {
  res.json({ message: "Move right" });
}
);

router.put("/left", (req, res) => {
  res.json({ message: "Move left" });
}
);

router.put("/down", (req, res) => {
  res.json({ message: "Move down" });
}
);

module.exports = router;
