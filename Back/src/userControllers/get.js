const { User } = require("../db");

const get = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.json({ status: "error", payload: "Coudn't find user" })
    } else {
      res.json({ status: "ok", payload: user });
    }
  } catch (err) {
    res.json({ status: "error", payload: err.message });
  }
};

module.exports = get;