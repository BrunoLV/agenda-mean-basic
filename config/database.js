var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contatos_mean_basic');

var db = mongoose.connection;

db.on('connected', function () {
    console.log("Aplicação conectada com o banco de dados.");
});

db.on('error', function (error) {
    console.error("Ocorreu um erro com a conexão com o banco de dados. Erro: " + error);
});

