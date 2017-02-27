import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './mathematics.html';
import controller from './mathematics.controller';

let mathematicsModule = angular.module('app.components.gui.screen.mathematics', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('mathematics', {
            url: '/mathematics', template: '<mathematics></mathematics>'
        });
    })
    .component('mathematics', {
        template,
        controller
    }
);

export default mathematicsModule;