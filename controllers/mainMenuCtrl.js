(function () {
    'use strict';
    angular
        .module('appModule')
        .controller('MainMenuCtrl', ['$scope', '$http', MainMenuCtrl]);

    function MainMenuCtrl($scope, $http) {

        $http.get('models/mainMenu.json').then(
            function (response) {
                $scope.menuItems = response.data;
            },
            function (error) {
                alert("http error");
            }
        )
    }
})();