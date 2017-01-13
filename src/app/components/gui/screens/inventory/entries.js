import angular from 'angular';

import template from './entries.html';

let entriesModule = angular.module('app.components.gui.screen.inventory.entries', [])
    .component('entries', {
        template,
        bindings: {
            entries: '<'
        }
    });

export default entriesModule;