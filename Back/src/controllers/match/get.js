const { Match } = require("../../db");

const get = async (req, res) => {
  try {
    const { id } = req.params;
    const matches = await Match.findAll({ where: { userId: id } });
    res.json({ status: "ok", payload: matches });
  } catch (err) {
    res.json({ status: "error", payload: err.message });
  }
};

module.exports = get;