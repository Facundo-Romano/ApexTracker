const get = async (req, res) => {
    const sendUserInfo = {
		id: req.user.id,
		name: req.user.name,
		email: req.user.email
	};
	return res.json({ status: "ok", payload: sendUserInfo });
};

module.exports = get;