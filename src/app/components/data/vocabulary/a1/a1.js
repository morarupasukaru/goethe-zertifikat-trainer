import angular from 'angular';
import vocabularyA1Service from './vocabulary-a1.service';

let vocabularyA1Module = angular.module('app.components.data.vocabulary.a1', [])
    .service('vocabularyA1Service', vocabularyA1Service)
    .factory("GoetheA1VocabularyBuilder",
        /*@ngInject*/
        function(VocabularyBuilder) {
            function Vocabulary() {
                VocabularyBuilder.call(this);
                this.result.level = 'a1';
                this.result.source = ['Goethe Institut', 'GOETHE-ZERTIFIKAT A1 START DEUTSCH 1', 'PRÜFUNGSZIELE TESTBESCHREIBUNG', 'ISBN 978-3-939670-76-6'];
            }
            Vocabulary.prototype = Object.create(VocabularyBuilder.prototype);
            Vocabulary.prototype.constructor = Vocabulary;
            return Vocabulary;
        }
    );

export default vocabularyA1Module;