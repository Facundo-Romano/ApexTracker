const { User } = require("../src/db");

const loadMockData = async () => {
	try {
	await User.create({
		name: "Facu",
		password: '1234',
		email: "facuromano121299@gmail.com"
	});
    } catch (err) {
	    console.log(err)
    }

};

module.exports = loadMockData;
