const { User } = require("../db");

const mainUpdate = async (req, res) => {
    try {
        const { id, main } = req.body;
        const user = await User.findOne({ where: { id } });
        if (!user) {
            res.json({ status: "error", payload: "Coudn't find user" })
        } else {
            user.main = main;
            await user.save();
            res.json({ status: "ok", payload: user });
        }
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = mainUpdate;