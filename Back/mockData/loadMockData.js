const matches = require("./matches.json");
const { Match, User } = require("../src/db");
const updateUser = require("../src/controllers/match/utils/updateUser.js");

const loadMockData = async () => {
	try {
	const dbMatches = await Match.bulkCreate(matches);
	const dbUser = await User.create({
		name: "Facu",
		password: 1234,
	});
	await dbUser.addMatches(dbMatches);
	updateUser(dbUser.dataValues.id)
    } catch (err) {
	    console.log(err)
    }

};

module.exports = loadMockData;
