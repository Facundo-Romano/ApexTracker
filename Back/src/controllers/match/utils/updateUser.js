const { Match, User } = require("../../../db");


const updateUser = async (userId) => {
    try {
        let userMatches = await Match.findAll({
			where: { userId },
			raw: true,
		});
        let totalMatches = userMatches.length;
		let totalKills = 0;
        let totalAssists = 0;
        let totalKnocks = 0;
        let totalDamage = 0;
        let totalTime = 0;
        let totalTeammateKills = 0;
        let totalTeammateAssists = 0;
        let totalTeammateKnocks = 0;
        let totalTeammateDamage = 0;
        let totalTeammates = 0;
        userMatches.forEach(match => {
            totalKills += match.kills;
            totalAssists += match.assists;
            totalKnocks += match.knocks;
            totalDamage += match.damage;
            totalTime += match.time;
            if (match.secondTeammateKills) {  
                totalTeammates += 2;
                totalTeammateKills += (match.teammateKills + match.secondTeammateKills);
                totalTeammateAssists += (match.teammateAssists + match.secondTeammateAssists);
                totalTeammateKnocks += (match.teammateKnocks + match.secondTeammateKnocks);
                totalTeammateDamage += (match.teammateDamage + match.secondTeammateDamage);
            } else {
                totalTeammates += 1;
                totalTeammateKills += match.teammateKills;
                totalTeammateAssists += match.teammateAssists;
                totalTeammateKnocks += match.teammateKnocks;
                totalTeammateDamage += match.teammateDamage;
            }
        });
        const averageKills = totalKills/totalMatches;
        const averageAssists = totalAssists/totalMatches;
        const averageKnocks = totalKnocks/totalMatches;
        const averageDamage = totalDamage/totalMatches;
        const averageTime = totalTime/totalMatches;
        const averageTeammateKills = totalTeammateKills/totalTeammates;
        const averageTeammateAssists = totalTeammateAssists/totalTeammates;
        const averageTeammateKnocks = totalTeammateKnocks/totalTeammates;
        const averageTeammateDamage = totalTeammateDamage/totalTeammates;

		const user = await User.findByPk(userId);
		const updatedUser = await user.update({ averageKills, averageAssists, averageKnocks, averageDamage,
                            averageTime, averageTeammateKills, averageTeammateAssists,
                            averageTeammateKnocks, averageTeammateDamage, totalMatches });
        return { status: "ok", payload: updatedUser }
    } catch (err) {
        return { status: "error", payload: err.message }
    }
};


module.exports = updateUser;