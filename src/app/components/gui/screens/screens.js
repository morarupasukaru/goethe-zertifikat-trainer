import angular from 'angular';
import Home from './home/home';
import Inventory from './inventory/inventory';
import Entry from './entry/entry';
import Stack from './stack/stack';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Inventory.name, Entry.name, Stack.name
]);

export default screensModule;