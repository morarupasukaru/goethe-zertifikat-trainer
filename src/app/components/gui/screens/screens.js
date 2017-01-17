import angular from 'angular';
import Home from './home/home';
import Inventory from './inventory/inventory';
import Entry from './entry/entry';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Inventory.name, Entry.name
]);

export default screensModule;