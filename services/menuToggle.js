(function () {
    'use strict';

    angular.module('appModule')
        .factory('TogglerFactory', function($rootScope) {
            var TogglerFactory = {};

            TogglerFactory.menuToggle = function(){
                console.log("alosh");
                $rootScope.clicked = !$rootScope.clicked;
            }

            return TogglerFactory;
        });
}());