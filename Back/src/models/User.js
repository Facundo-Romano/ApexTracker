const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('user', {
		name: {
            type: DataTypes.STRING,
			allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
			allowNull: false,
        },
        averageKills: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        averageAssists: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        averageKnocks: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        averageDamage: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        averageTime: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        averageTeammateKills: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        averageTeammateAssists: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        averageTeammateKnocks: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        averageTeammateDamage: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
			allowNull: false,
        },
        totalMatches: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
			allowNull: false,
        },
        main: {
            type: DataTypes.ENUM("Ash", "Bangalore", "Bloodhound", "Caustic", "Crypto", 
            "Fuse", "Gibraltar", "Horizon", "Lifeline", "Loba", "Mad Maggie", "Mirage",
            "Octane", "Pathfinder", "Rampart", "Revenant", "Seer", "Valkyrie", "Wattson",
            "Wraith"),
            defaultValue: "Revenant",
			allowNull: false,
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
			allowNull: false,
        }
	})
};