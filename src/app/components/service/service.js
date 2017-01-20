import angular from 'angular';
import FlashcardService from './flashcard/flashcard';
import PersistenceService from './persistence/persistence';

let serviceModule = angular.module('app.components.service', [
    FlashcardService.name, PersistenceService.name
]);

export default serviceModule;