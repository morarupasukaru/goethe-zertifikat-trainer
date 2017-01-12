import angular from 'angular';

let entryModule = angular.module('app.components.data.entry', [])
    .factory("EntryBuilder", function() {
        function Entry() {
            this.result = {};
            this.result.level = 'a1';
            this.result.source = ['Goethe Institut', 'GOETHE-ZERTIFIKAT A1 START DEUTSCH 1', 'PRÜFUNGSZIELE TESTBESCHREIBUNG', 'ISBN 978-3-939670-76-6'];
            Entry.prototype.thema = function(value) {
                if (!!value) {
                    this.result.thema = value;
                }
                return this;
            };
            Entry.prototype.entry = function(value) {
                if (!!value) {
                    this.result.entry = value;
                }
                return this;
            };
            Entry.prototype.example = function(value) {
                if (!!value) {
                    this.result.example = value;
                }
                return this;
            };
            Entry.prototype.get = function() {
                return this.result;
            };
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
    )
    .factory("LanguageCapacityBuilder",
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

export default entryModule;