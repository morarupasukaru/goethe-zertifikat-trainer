import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './alphabet.html';
import controller from './alphabet.controller';

let alphabetModule = angular.module('app.components.gui.screen.alphabet', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('alphabet', {
            url: '/alphabet', template: '<alphabet></alphabet>'
        });
    })
    .component('alphabet', {
        template,
        controller
    }
);

export default alphabetModule;