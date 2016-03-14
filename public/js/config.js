agenda.config(function ($routeProvider) {

        $routeProvider.when('/contatos', {
            templateUrl: 'partials/lista-contatos.html',
            controller: 'AgendaController'
        });

        $routeProvider.when('/home', {
            templateUrl: 'partials/lista-contatos.html',
            controller: 'AgendaController'
        });

        $routeProvider.when('/about', {
            templateUrl: 'partials/about.html'
        });

        $routeProvider.when('/contact', {
            templateUrl: 'partials/contact.html'
        });

        $routeProvider.when('/contato/new', {
            templateUrl: 'partials/cadastro-contatos.html',
            controller: 'AgendaController'
        });

        $routeProvider.when('/contato/edit/:contatoId', {
            templateUrl: 'partials/cadastro-contatos.html',
            controller: 'AgendaController'
        });

        $routeProvider.otherwise({redirectTo: '/contatos'});

    }
);