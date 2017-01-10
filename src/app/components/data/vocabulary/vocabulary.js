import angular from 'angular';
import a1 from './a1/a1';

let vocabularyModule = angular.module('app.components.data.vocabulary', [
    a1.name
]);

export default vocabularyModule;