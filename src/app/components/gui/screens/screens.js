import angular from 'angular';
import Home from './home/home';
import Inventory from './inventory/inventory';
import Entry from './entry/entry';
import Stack from './stack/stack';
import Flashcard from './flashcard/flashcard';
import Localstorage from './localstorage/localstorage';
import Alphabet from './alphabet/alphabet';

let screensModule = angular.module('app.components.gui.screens', [
    Home.name, Inventory.name, Entry.name, Stack.name, Flashcard.name, Localstorage.name, Alphabet.name
]);

export default screensModule;