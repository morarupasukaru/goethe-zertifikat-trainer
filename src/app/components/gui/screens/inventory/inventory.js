import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './inventory.html';
import controller from './inventory.controller';

let inventoryModule = angular.module('app.components.gui.screen.inventory', [
    uiRouter
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('inventory', {
            url: '/inventory', template: '<inventory></inventory>'
        });
    })

    .component('inventory', { template, controller });

export default inventoryModule;