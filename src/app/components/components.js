import angular from 'angular';
import Data from './data/data';
import Gui from './gui/gui';
import Service from './service/service';

let componentModule = angular.module('app.components', [
    Data.name, Gui.name, Service.name
]);

export default componentModule;