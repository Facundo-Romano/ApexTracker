const { User } = require("../src/db");

const loadMockData = async () => {
	try {
	const dbUser = await User.create({
		name: "Facu",
		password: '1234'
	});
    } catch (err) {
	    console.log(err)
    }

};

module.exports = loadMockData;
