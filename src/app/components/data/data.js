import angular from 'angular';
import Entries from './entries/entries';

let dataModule = angular.module('app.components.data', [
    Entries.name
]);

export default dataModule;