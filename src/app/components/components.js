import angular from 'angular';
import Gui from './gui/gui';
import Data from './data/data';

let componentModule = angular.module('app.components', [
    Data.name, Gui.name
]);

export default componentModule;