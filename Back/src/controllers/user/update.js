const { User } = require("../../db");

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.update({ ...req.body }, { where: { id } });
        res.json({ status: "ok", payload: user });
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = remove;