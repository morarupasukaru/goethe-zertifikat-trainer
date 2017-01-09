import angular from 'angular';
import Screens from './screens/screens';

let guiModule = angular.module('app.components.gui', [
    Screens.name
]);

export default guiModule;