const { User } = require("../db");

const remove = async (req, res) => {
    try {
        const { id, oldPassword } = req.body;
        const user = await User.findOne({ where: { id } });
        if (!user) {
            res.json({ status: "error", payload: "Coudn't find user" })
        } else if (!compareSync(oldPassword, user.password)) {
			return res.json({
				status: "error",
				message: "Old password doesn't match",
			})
		} else {
            await user.destroy();
            res.json({ status: "ok", payload: user });
        }
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = remove;