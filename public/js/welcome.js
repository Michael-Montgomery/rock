var app = angular.module('rock.welcome', []);


app.controller('welcomeController', function($scope, $location) {
    $scope.newRock = function(){
        $location.path('/newrock')
    }
})

