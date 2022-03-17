const { User } = require("../db");
const getApiData = require("../ApexLegendsAPI/getApiData.js");

const update = async (req, res) => {
    try {
        const { id, type, payload } = req.body;
        const user = await User.findOne({ where: { id } });
        if (!user) {
            res.json({ status: "error", payload: "Coudn't find user" });
        }
        switch (type) {
            case "main":
                const { main } = payload;
                user.main = main;
                await user.save();
                res.json({ status: "ok", payload: user });
            case "password": 
                const { oldPassword, newPassword } = payload;
                if (!compareSync(oldPassword, user.password)) {
                    return res.json({ status: "error", message: "Old password doesn't match" });
                } else {
                    user.password = newPassword;
                    await user.save();
                    res.json({ status: "ok", payload: user });
                }
            case "points": 
                const { points } = payload;
                user.points += points;
                await user.save();
                res.json({ status: "ok", payload: user });
            case "apexAccount": 
                const { apexAccount, platform } = payload;
                const data = getApiData(platform, apexAccount);
                if (data.status === "ok") {
                    user.associatedApexAccount = apexAccount;
                    user.platform = platform;
                    await user.save();
                    res.json({ status: "ok", payload: user })
                } else {
                    return { status: "error", payload: data.payload }
                }

            
        }
    } catch (err) {
        res.json({ status: "error", payload: err.message })
    }
};

module.exports = update;