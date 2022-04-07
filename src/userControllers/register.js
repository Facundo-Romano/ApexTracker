const { User } = require("../db");

const create = async (req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({ where: { email } });
        if (user) res.json({ status: "error", payload: "Email already taken" });
        else {
            await User.create({ ...req.body });
            res.json({ status: "ok", payload: "User created successfully" });
        }
    } catch (err) {
        res.status(404).json(err)
    }
};

module.exports = create;