import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './localstorage.html';
import controller from './localstorage.controller';

let localstorageModule = angular.module('app.components.gui.screen.localstorage', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('localstorage', {
            url: '/localstorage', template: '<localstorage></localstorage>'
        });
    })
    .component('localstorage', {
        template,
        controller
    });

export default localstorageModule;