(function () {
    'use strict';
    angular
        .module('appModule')
        .config(['$routeProvider', routing]);

    function routing ($routeProvider) {
        $routeProvider
            .when('/page1', {
            url: "/page1",
            templateUrl: 'views/page1.html',
            controller: 'Page1Ctrl'
        })
            .when('/page2', {
                url: "/page2",
                templateUrl: 'views/page2.html',
                controller: 'Page2Ctrl'
            })
    }
})();