import angular from 'angular';
import FlashcardService from './flashcard/flashcard';

let serviceModule = angular.module('app.components.service', [
    FlashcardService.name
]);

export default serviceModule;