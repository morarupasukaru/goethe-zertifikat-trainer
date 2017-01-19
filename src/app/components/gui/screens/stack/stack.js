import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './stack.html';
import controller from './stack.controller';

let stackModule = angular.module('app.components.gui.screen.stack', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('stack', {
            url: '/stack', template: '<stack></stack>'
        });
    })
    .component('stack', {
        template,
        controller
    }
);

export default stackModule;