import angular from 'angular';
import vocabularyA1Service from './vocabulary-a1.service';

let vocabularyA1Module = angular.module('app.components.data.vocabulary.a1', [])
    .service('vocabularyA1Service', vocabularyA1Service);

export default vocabularyA1Module;