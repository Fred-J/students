(function () {
    'use strict';
    angular
        .module('appModule')
        .config(['$routeProvider', routing]);

    function routing ($routeProvider) {
        $routeProvider
            .when('/menuItems', {
            url: "/menuItems",
            templateUrl: 'views/mainMenu.html',
            controller: 'MainMenuCtrl'
        })
            .when('/page1', {
            url: "/page1",
            templateUrl: 'views/page1.html',
            controller: 'page1Ctrl'
        })
            .when('/page2', {
                url: "/page2",
                templateUrl: 'views/page2.html',
                controller: 'page2Ctrl'
            })
            .otherwise({      //home page
                redirectTo: '/menuItems'
            });
    }
})();