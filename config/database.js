const Sequelize = require("sequelize");

const connection = new Sequelize('liraq013_rpg_desk','liraq013_ltd','xz5127912',{
    host: 'liraquality.com.br',
    dialect: 'mysql'
});

module.exports = connection;


	
	
