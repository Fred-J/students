(function () {
    'use strict';
    angular
        .module('appModule')
        .controller('MainMenuCtrl', ['$scope', '$http', 'TogglerFactory',  MainMenuCtrl]);

    function MainMenuCtrl($scope, $http, Toggler) {

        $http.get('models/mainMenu.json').then(
            function (response) {
                $scope.menuItems = response.data;
            },
            function (error) {
                alert("http error");
            }
        )

        $scope.itemClicked = function (item){
            Toggler.menuToggle();
        }

    }
})();