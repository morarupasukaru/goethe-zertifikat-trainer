import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './flashcard.html';
import controller from './flashcard.controller';

let flashcardModule = angular.module('app.components.gui.screen.flashcard', [
])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('flashcard', {
            url: '/flashcard/{type}/{id}?refresh', template: '<flashcard></flashcard>'
        });
    })
    .component('flashcard', {
        template,
        controller
    }
);

export default flashcardModule;