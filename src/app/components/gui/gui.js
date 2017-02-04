import angular from 'angular';
import Screens from './screens/screens';
import Components from './components/components';

let guiModule = angular.module('app.components.gui', [
    Screens.name, Components.name
]);

export default guiModule;