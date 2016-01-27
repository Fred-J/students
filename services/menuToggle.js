(function () {
    'use strict';

    angular.module('appModule')
        .factory('TogglerFactory', function($rootScope) {
            var TogglerFactory = {};

            TogglerFactory.menuToggle = function(){
                $rootScope.clicked = !$rootScope.clicked;
            }

            return TogglerFactory;
        });
}());