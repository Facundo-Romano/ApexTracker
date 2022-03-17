const { User } = require("../db");
const createJWT = require("./utils/createJWT.js");

const create = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) res.json({ status: "error", payload: "Email already taken" });
        else {
            const newUser = await User.create({ ...req.body });
            const token = createJWT(newUser.id);
            const sendUserInfo = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                token
            };
            res.json({ status: "ok", payload: sendUserInfo });
        }
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = create;