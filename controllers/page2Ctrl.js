(function () {
    'use strict';
    angular
        .module('appModule')
        .controller('Page2Ctrl', ['TogglerFactory', page2Ctrl]);

    function page2Ctrl(Toggler) {
        Toggler.menuToggle();
    }
})();