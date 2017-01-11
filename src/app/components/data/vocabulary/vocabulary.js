import angular from 'angular';
import a1 from './a1/a1';

let vocabularyModule = angular.module('app.components.data.vocabulary', [
    a1.name
])
    .factory("VocabularyBuilder", function() {
        function Vocabulary() {
            this.result = {};
            this.result.type = 'vocabulary';
        }
        Vocabulary.prototype.entry = function(value) {
            if (!!value) {
                this.result.entry = value;
            }
            return this;
        };
        Vocabulary.prototype.level = function(value) {
            if (!!value) {
                this.result.level = value;
            }
            return this;
        };
        Vocabulary.prototype.thema = function(value) {
            if (!!value) {
                this.result.thema = value;
            }
            return this;
        };
        Vocabulary.prototype.source = function(value) {
            if (!!value) {
                this.result.source = value;
            }
            return this;
        };
        Vocabulary.prototype.alternative = function(value) {
            if (!!value) {
                this.result.alternative = value;
            }
            return this;
        };
        Vocabulary.prototype.example = function(value) {
            if (!!value) {
                this.result.example = value;
            }
            return this;
        };
        Vocabulary.prototype.get = function() {
            return this.result;
        };
        return Vocabulary;
      });

export default vocabularyModule;