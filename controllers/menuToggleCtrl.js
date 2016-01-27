(function () {
    'use strict';
    angular
        .module('appModule')
        .controller('MenuToggleCtrl', ['$scope', 'TogglerFactory', MenuToggleCtrl]);

    function MenuToggleCtrl($scope, Toggler) {
        $scope.menuToggle = Toggler.menuToggle;
    }
})();