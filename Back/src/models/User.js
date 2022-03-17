const { DataTypes } = require('sequelize');
const { hashSync } = require("bcrypt");

module.exports = (sequelize) => {
	sequelize.define('user', {
		name: {
            type: DataTypes.STRING,
			allowNull: false,
        },
        associatedApexAccount: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
			allowNull: false,
            set(password) {
				this.setDataValue('password', hashSync(password, 10))
			}
        },
        platform: {
            type: DataTypes.ENUM("PC", "PS4", "X1")
        },
        main: {
            type: DataTypes.ENUM("Ash", "Bangalore", "Bloodhound", "Caustic", "Crypto", 
            "Fuse", "Gibraltar", "Horizon", "Lifeline", "Loba", "Mad Maggie", "Mirage",
            "Octane", "Pathfinder", "Rampart", "Revenant", "Seer", "Valkyrie", "Wattson",
            "Wraith"),
            defaultValue: "Revenant"
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
	})
};