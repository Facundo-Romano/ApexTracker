const { User, Match } = require("../../db");

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await Match.destroy({ where: { userId: id } });
        const user = await User.destroy({ where: { id } });
        res.json({ status: "ok", payload: user });
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = remove;