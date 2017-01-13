import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './inventory.html';
import controller from './inventory.controller';
import Entries from './entries';
import Themas from './themas';

let inventoryModule = angular.module('app.components.gui.screen.inventory', [
    uiRouter, Entries.name, Themas.name
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('inventory', {
            url: '/inventory', template: '<inventory></inventory>'
        });
    })

    .component('inventory', { template, controller });

export default inventoryModule;