import angular from 'angular';
import Home from './home/home';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name
]);

export default screensModule;