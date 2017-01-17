import angular from 'angular';
import grammarA1Service from './grammar-a1.service.js';
import notionsA1Service from './notions-a1.service.js';
import speechActsA1Service from './speech-acts-a1.service';
import strategiesA1Service from './strategies-a1.service.js';
import themasA1Service from './themas-a1.service.js';
import vocabularyA1Service from './vocabulary-a1.service';
import entriesService from './entries.service';

let entriesModule = angular.module('app.components.data.entries', [])
    .service('grammarA1Service', grammarA1Service)
    .service('notionsA1Service', notionsA1Service)
    .service('speechActsA1Service', speechActsA1Service)
    .service('strategiesA1Service', strategiesA1Service)
    .service('themasA1Service', themasA1Service)
    .service('vocabularyA1Service', vocabularyA1Service)
    .service('entriesService', entriesService)
    .factory("EntryBuilder", function() {
        function Entry() {
            this.result = {};
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
            Entry.prototype.id = function(value) {
                if (!!value) {
                    this.result.id = value;
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
    .factory("SpeechActBuilder",
        /*@ngInject*/
        function(EntryBuilder) {
            function LanguageCapacity() {
                EntryBuilder.call(this);
                this.result.type = 'speechAct';
            }
            LanguageCapacity.prototype = Object.create(EntryBuilder.prototype);
            LanguageCapacity.prototype.constructor = LanguageCapacity;
            return LanguageCapacity;
        }
    )
    .factory("StrategyBuilder",
        /*@ngInject*/
        function(EntryBuilder) {
            function Strategy() {
                EntryBuilder.call(this);
                this.result.type = 'strategy';
            }
            Strategy.prototype = Object.create(EntryBuilder.prototype);
            Strategy.prototype.constructor = Strategy;
            return Strategy;
        }
    )
    .factory("NotionBuilder",
        /*@ngInject*/
        function(EntryBuilder) {
            function Notion() {
                EntryBuilder.call(this);
                this.result.type = 'notion';
            }
            Notion.prototype = Object.create(EntryBuilder.prototype);
            Notion.prototype.constructor = Notion;
            return Notion;
        }
    )
    .factory("ThemaBuilder",
        /*@ngInject*/
        function(EntryBuilder) {
            function Notion() {
                EntryBuilder.call(this);
                this.result.type = 'thema';
            }
            Notion.prototype = Object.create(EntryBuilder.prototype);
            Notion.prototype.constructor = Notion;
            return Notion;
        }
    )
    .factory("GrammarBuilder",
        /*@ngInject*/
        function(EntryBuilder) {
            function Grammar() {
                EntryBuilder.call(this);
                this.result.type = 'grammar';
            }
            Grammar.prototype = Object.create(EntryBuilder.prototype);
            Grammar.prototype.constructor = Grammar;
            return Grammar;
        }
    );

export default entriesModule;