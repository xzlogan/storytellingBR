const Sequelize = require("sequelize");
const connection = require("../config/database");

const HomeM = connection.define('home',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//HomeM.sync({force:true}); // forca a criação da tabela no banco de dados
module.exports = HomeM;
