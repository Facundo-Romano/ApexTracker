const { User } = require("../db");
const { compareSync } = require("bcrypt");
const createJWT = require("./utils/createJWT.js");

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) res.json({ status: "error", payload: "Incorrect user or password" });
        if (!compareSync(password, user.password)) res.json({ status: "error", payload: "Incorrect user or password" });
        /* if (!user.isVerified)
        return res.json({
        status: "error",
        message: "User email is not verified",
        }); */

        const token = createJWT(user.id);

        const sendUserInfo = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        
        return res.json({ status: "ok", payload: { user: sendUserInfo, token } });
    } catch (err) {
        res.json({ status: "error", payload: err.message });
    }
};
module.exports = login;