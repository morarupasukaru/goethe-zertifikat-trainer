import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './salutations-closings.html';
import controller from './salutations-closings.controller';

let salutationsClosingsModule = angular.module('app.components.gui.screen.salutations-closings', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('salutationsClosings', {
            url: '/salutations-closings', template: '<salutations-closings></salutations-closings>'
        });
    })
    .component('salutationsClosings', {
        template,
        controller
    }
);

export default salutationsClosingsModule;