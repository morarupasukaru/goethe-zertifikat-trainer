import angular from 'angular';
import Gui from './gui/gui';

let componentModule = angular.module('app.components', [
    Gui.name
]);

export default componentModule;