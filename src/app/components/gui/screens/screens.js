import angular from 'angular';
import Home from './home/home';
import Inventory from './inventory/inventory';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Inventory.name
]);

export default screensModule;