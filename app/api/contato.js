var mongoose = require('mongoose');

var api = {};

var contatoModel = mongoose.model('Contato');

api.listar = function (req, res) {
    contatoModel.find({}).then(function (contatos) {
        if (!contatos) {
            throw Error('Nenhum resultado retornado.');
        };
        res.json(contatos);
    }, function (error) {
        console.error('Ocorreu erro na operação. Erro: ' + error);
        res.status(404).json(error);
    });
};

api.buscarPorId = function (req, res) {
    console.info("Entrou aqui: " + req.params.id);
    contatoModel.findById({_id: req.params.id}).then(function (contato) {
        if (!contato) {
            throw Error('Nenhum resultado retornado.');
        };
        console.info(contato)
        res.json(contato)
    }, function (error) {
        console.error('Ocorreu erro na operação. Erro: ' + error);
        res.status(404).json(error);
    });
};

api.remover = function (req, res) {
    contatoModel.remove({_id: req.params.id}).then(function () {
        res.sendStatus(204);
    }, function (error) {
        console.error('Ocorreu erro na operação. Erro: ' + error);
        res.status(500).json(error);
    });
};

api.salvar = function (req, res) {
    var contato = req.body;
    contatoModel.create(contato).then(function (contato) {
        res.json(contato);
    }, function (error) {
        console.error('Ocorreu erro na operação. Erro: ' + error);
        res.status(500).json(error);
    })
};

api.atualizar = function (req, res) {
    contatoModel.findByIdAndUpdate(req.params.id, req.body).then(function (contato) {
        res.json(contato);
    }, function (error) {
        console.error('Ocorreu erro na operação. Erro: ' + error);
        res.status(500).json(error);
    })
};

module.exports = api;