import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './entry.html';
import controller from './entry.controller';

let entryModule = angular.module('app.components.gui.screen.entry', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('entry', {
            url: '/entry/{id}', template: '<entry></entry>'
        });
    })
    .component('entry', {
        template,
        controller
    }
);

export default entryModule;