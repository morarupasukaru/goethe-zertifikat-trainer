import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './stack.html';
import stackService from './stack.service';
import Stacks from './stacks';

let stackModule = angular.module('app.components.gui.screen.stack', [ Stacks.name ])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('stack', {
            url: '/stack', template: '<stack></stack>'
        });
    })
    .component('stack', {
        template
    })
    .service('stackService', stackService)
    .constant('initialStack', 'zu-lernen');


export default stackModule;