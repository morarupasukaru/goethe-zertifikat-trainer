import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './stack.html';
import controller from './stack.controller';
import stackService from './stack.service';

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
    })
    .service('stackService', stackService)
    .constant('initialStack', 'zu-lernen');


export default stackModule;