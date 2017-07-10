var app = angular.module('rock', [
    'ngRoute',
    'rock.welcome',
    'rock.new'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        reditectTo: '/welcome'
    });

    $routeProvider.when('/welcome', {
        templateUrl: 'public/views/templates/welcome.tpl.html',
        controller: 'welcomeController'
    });

    $routeProvider.when('/newrock', {
        templateUrl: 'public/views/templates/newrock.tpl.html',
        controller: 'newController'
    });

})