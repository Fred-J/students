(function () {
    'use strict';
    angular
        .module('appModule')
        .controller('Page1Ctrl', ['$scope', 'TogglerFactory', page1Ctrl]);

    function page1Ctrl($scope, Toggler) {
        Toggler.menuToggle();
    }
})();