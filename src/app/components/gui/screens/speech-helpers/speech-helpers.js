import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './speech-helpers.html';
import controller from './speech-helpers.controller';
import data from './speech-helpers-data.js';

let speechHelpersModule = angular.module('app.components.gui.screen.speech-helpers', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('speechHelpers', {
            url: '/speech-helpers?print', template: '<speech-helpers></speech-helpers>'
        });
    })
    .component('speechHelpers', {
        template,
        controller
    })
    .constant('data', data);


export default speechHelpersModule;