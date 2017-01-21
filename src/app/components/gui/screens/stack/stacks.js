import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './stacks.html';
import controller from './stacks.controller';

let stacksModule = angular.module('app.components.gui.screen.stacks', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('stacks', {
            url: '/stacks', template: '<stacks></stacks>'
        });
    })
    .component('stacks', {
        template,
        controller
    });

export default stacksModule;