const { User } = require("../../db");

const get = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    res.json({ status: "ok", payload: user });
  } catch (err) {
    res.json({ status: "error", payload: err.message });
  }
};

module.exports = get;