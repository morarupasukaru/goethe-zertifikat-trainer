import angular from 'angular';
import Footnote from './footnote/footnote';

let guiComponentsModule = angular.module('app.components.gui.components', [
    Footnote.name
]);

export default guiComponentsModule;