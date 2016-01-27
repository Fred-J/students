(function () {
    'use strict';
    angular
        .module('appModule')
        .controller('Page2Ctrl', ['$scope', 'TogglerFactory', page2Ctrl]);

    function page2Ctrl($scope, Toggler) {
        Toggler.menuToggle();
    }
})();