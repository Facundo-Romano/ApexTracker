const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('match', {
		kills: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		assists: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		knocks: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		damage: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		time: {
			type: DataTypes.FLOAT,
			allowNull: false,
            set (survivalTime) {
                const timeArr = survivalTime.split(":");
				const num = parseInt(timeArr[1])*100/600;
                const timeSum = (parseInt(timeArr[0]) + num/10).toFixed(3);
                this.setDataValue("time", timeSum);
            }
        },
		teammateKills: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		teammateAssists: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        teammateKnocks: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        teammateDamage: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		secondTeammateKills: {
			type: DataTypes.INTEGER,
		},
		secondTeammateAssists: {
			type: DataTypes.INTEGER,
		},
        secondTeammateKnocks: {
			type: DataTypes.INTEGER,
		},
        secondTeammateDamage: {
			type: DataTypes.INTEGER,
		},
	})
};