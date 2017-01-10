import angular from 'angular';
import Vocabulary from './vocabulary/vocabulary';

let dataModule = angular.module('app.components.data', [
    Vocabulary.name
]);

export default dataModule;