agenda.factory('httpResource', function ($http, $log) {
    var _listar = function () {
        $log.debug("Chando o método rest para listar todos contatos....");
        var promise = $http.get("/v1/contato");
        $log.debug("Terminou a chamadada rest para listar todos contatos....");
        return promise;
    };

    var _salvar = function (contato) {
        console.log("Chamando");
        var promise = $http.post("/v1/contato", contato);
        return promise;
    };

    var _atualizar = function (id, contato) {
        var promise = $http.put("/v1/contato/" + id, contato);
        return promise;
    };

    var _excluir = function (id) {
        var promise = $http.delete("/v1/contato/" + id);
        return promise;
    };

    var _buscarPorId = function(id) {
        var promise = $http.get("/v1/contato/" + id);
        return promise;
    };

    return {
        listar: _listar,
        salvar: _salvar,
        atualizar: _atualizar,
        excluir: _excluir,
        buscarPorId: _buscarPorId
    };
});
