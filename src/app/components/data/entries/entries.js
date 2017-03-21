import angular from 'angular';
import vocabularyA1Service from './vocabulary-a1.service';
import vocabularyA2Service from './vocabulary-a2.service';
import entriesService from './entries.service';

let isNull = require('null-checker');

let entriesModule = angular.module('app.components.data.entries', [])
    .service('vocabularyA1Service', vocabularyA1Service)
    .service('vocabularyA2Service', vocabularyA2Service)
    .service('entriesService', entriesService)
    .factory("EntryBuilder", function() {
        function Entry() {
            this.result = {};
            this.result.source = ['Goethe Institut, GOETHE-ZERTIFIKAT A1 START DEUTSCH 1, PRÜFUNGSZIELE TESTBESCHREIBUNG, ISBN 978-3-939670-76-6', 'http://dict.leo.org/'];
            Entry.prototype.thema = function(value) {
                if (!isNull(value)) {
                    this.result.thema = value;
                }
                return this;
            };
            Entry.prototype.entry = function(value) {
                if (!isNull(value)) {
                    this.result.entry = value;
                }
                return this;
            };
            Entry.prototype.example = function(value) {
                if (!isNull(value)) {
                    this.result.example = value;
                }
                return this;
            };
            Entry.prototype.id = function(value) {
                if (!isNull(value)) {
                    this.result.id = value;
                }
                return this;
            };
            Entry.prototype.translate = function(value) {
                if (!isNull(value)) {
                    this.result.translate = value;
                }
                return this;
            };
            Entry.prototype.get = function() {
                return this.result;
            };
            this.result.visibleFields = [ 'entry', 'example', 'type', 'thema', 'source', 'translate' ];
        }
        return Entry;
    })
    .factory("VocabularyBuilder",
        /*@ngInject*/
        function(EntryBuilder) {
            function Vocabulary() {
                EntryBuilder.call(this);
                this.result.type = 'vocabulary';
            }
            Vocabulary.prototype = Object.create(EntryBuilder.prototype);
            Vocabulary.prototype.alternative = function(value) {
                if (!!value) {
                    this.result.alternative = value;
                }
                return this;
            };
            Vocabulary.prototype.constructor = Vocabulary;
            return Vocabulary;
        }
    );

export default entriesModule;