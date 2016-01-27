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

        // different version to do the same but without error handling.
        //$http.get('models/mainMenu.json').success(
        //    function(data){
        //        $scope.menuItems = data;
        //    }
        //)

        $scope.mainMenuSelection = function (item) {
            alert(item);
        }
    }
})();