(function () {
    'use strict';
    angular
        .module('appModule')
        .controller('Page1Ctrl', ['TogglerFactory', page1Ctrl]);

    function page1Ctrl(Toggler) {
        Toggler.menuToggle();
    }
})();