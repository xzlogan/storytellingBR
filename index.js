const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./config/database");

// Import Controller e Model

const homeController = require("./controllers/HomeController"); 
const homeModel = require("./models/HomeModel"); 





const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

// View engine
app.set('view engine','ejs');

// Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })




app.get("/", (req, res) => {
    res.render("index");
})


// iniciar o Servidor 
app.listen(8080, () => {
    console.log("O servidor está rodando!")
})

// Router
app.use("/",categoriesController);    
app.use("/",articlesController);
app.use("/",homeController);