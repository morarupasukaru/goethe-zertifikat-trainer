import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './credits.html';
import controller from './credits.controller';

let creditsModule = angular.module('app.components.gui.screen.credits', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('credits', {
            url: '/credits', template: '<credits></credits>'
        });
    })
    .component('credits', {
        template,
        controller
    }
);

export default creditsModule;