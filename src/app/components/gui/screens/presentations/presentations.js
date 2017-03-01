import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './presentations.html';
import controller from './presentations.controller';

let presentationsModule = angular.module('app.components.gui.screen.presentations', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('presentations', {
            url: '/presentations', template: '<presentations></presentations>'
        });
    })
    .component('presentations', {
        template,
        controller
    }
);

export default presentationsModule;