module.exports = function (app) {

    var api = app.api.contato;

    app.route('/v1/contato').get(api.listar).post(api.salvar);
    app.route('/v1/contato/:id').get(api.buscarPorId).put(api.atualizar).delete(api.remover);

};