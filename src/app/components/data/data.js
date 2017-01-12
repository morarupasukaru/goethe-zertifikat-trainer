import angular from 'angular';
import Entry from './entry/entry';

let dataModule = angular.module('app.components.data', [
    Entry.name
]);

export default dataModule;