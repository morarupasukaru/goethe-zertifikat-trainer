import angular from 'angular';
import Entry from './entry/entry';
import Vocabulary from './vocabulary/vocabulary';

let dataModule = angular.module('app.components.data', [
    Entry.name, Vocabulary.name
]);

export default dataModule;