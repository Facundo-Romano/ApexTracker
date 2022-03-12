const { Match, User } = require("../../db");
const updateUser = require("./utils/updateUser.js");

const create = async (req, res) => {
    try {
        const { id } = req.params;
        const match = await Match.create({ ...req.body});
        const user = await User.findOne({ where: { id } });
        await user.addMatch(match);
        updateUser(id);
        res.json({ status: "ok", payload: match });
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = create;