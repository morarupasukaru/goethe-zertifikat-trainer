import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './punctuation.html';
import controller from './punctuation.controller';

let punctuationModule = angular.module('app.components.gui.screen.punctuation', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('punctuation', {
            url: '/punctuation', template: '<punctuation></punctuation>'
        });
    })
    .component('punctuation', {
        template,
        controller
    }
);

export default punctuationModule;