agenda.controller('AgendaController', function ($scope, $routeParams, $window, httpResource, $log, $location) {

    $scope.tabs = [
        {title: 'Dados'},
        {title: 'Telefones'}
    ];

    $scope.model = {
        name: 'Tabs'
    };

    $scope.contato = {};
    $scope.contato.telefones = [];

    $scope.contatos = [];
    $scope.telefone = {};

    $scope.mensagem = "";

    if ($routeParams.contatoId) {
        httpResource.buscarPorId($routeParams.contatoId).then(function(contato){
            $scope.contato = contato.data;
        }, function(error){
            $log.error(error);
        });
    };

    httpResource.listar().then(function (contatos) {
        $log.info(contatos);
        $scope.contatos = contatos.data;
    }, function (error) {
        $log.error(error);
    });

    $scope.incluirTelefone = function() {
        $scope.contato.telefones.push($scope.telefone);
        $scope.telefone = {};
    };

    $scope.removerTelefone = function(telefone) {
        $scope.contato.telefones.splice(telefone, 1);
    };

    $scope.editarTelefone = function(telefone) {
        $scope.telefone = telefone;
        $scope.contato.telefones.splice(telefone, 1);
    };

    $scope.salvar = function() {
        if ($routeParams.contatoId){
            httpResource.atualizar($routeParams.contatoId, $scope.contato);
            $scope.mensagem = "Contato atualizado com sucesso!";
        } else {
            httpResource.salvar($scope.contato);
            $scope.mensagem = "Contato criado com sucesso!";
        }
    };

    $scope.excluir = function(contato){
        httpResource.excluir(contato._id).then(function() {
            $scope.contatos.splice(contato, 1);
            $scope.mensagem = "Contato excluído com sucesso.";
        }, function(error) {
            $log.error(error);
        });
    };

    $scope.listar = function() {
        $location.path('/contatos');
    }

});