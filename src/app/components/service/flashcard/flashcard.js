import angular from 'angular';
import flashcardService from './flashcard.service.js';

let flashcardModule = angular.module('app.components.service.flashcard', [])
    .service('flashcardService', flashcardService);

export default flashcardModule;