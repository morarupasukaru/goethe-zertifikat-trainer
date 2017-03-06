import angular from 'angular';
import Entries from './entries/entries';

let dataModule = angular.module('app.components.data', [
    Entries.name
])
.constant('levels', ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']);

export default dataModule;