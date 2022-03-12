const { User } = require("../../db");

const create = async (req, res) => {
    try {
        const user = await User.create({ ...req.body });
        res.json({ status: "ok", payload: user });
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = create;