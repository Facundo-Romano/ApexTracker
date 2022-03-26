const { User } = require("../db");
const createJWT = require("./utils/createJWT.js");

const create = async (req, res) => {
    const user = req.body;
    const email = user.email;
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
        res.status(404).json(err)
    }
};

module.exports = create;