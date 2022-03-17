const { User } = require("../db");
const { compareSync } = require("bcrypt");

const passwordUpdate = async (req, res) => {
    try {
        const { id, newPassword, oldPassword } = req.body;
        const user = await User.findOne({ where: { id } });
        if (!user) {
            res.json({ status: "error", payload: "Coudn't find user" })
        } else if (!compareSync(oldPassword, user.password)) {
			return res.json({
				status: "error",
				message: "Old password doesn't match",
			})
		} else {
            user.password = newPassword;
            await user.save();
            res.json({ status: "ok", payload: user });
        }
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = passwordUpdate;