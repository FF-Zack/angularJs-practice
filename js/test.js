'use strict';

var table_app = angular.module('table_app', ['ui.router', 'ngResource']);

table_app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        url: '/index',
        views: {
            '': {
                templateUrl: 'views/index.html'
            },
            'main@index': {
                templateUrl: 'views/welcome.html'
            }
        }
    }).
    state('phonelist', {
        url: '^/{phoneType:[0-9]{1,4}}',
        views: {
            '': {
                templateUrl: 'views/phone_main.html'
            },
            'phonebar@phonelist': {
                templateUrl: 'views/phone_bar.html'
            },
            'phonelist@phonelist': {
                templateUrl: 'views/phone_list.html',
                controller: 'phonelistCtrl'
            }
        }
    }).
    state('phonedetail', {
        url: '/phonedetail/:phoneId',
        templateUrl: 'views/phone_detail.html',
        controller: 'phonedetailCtrl'
    })
});