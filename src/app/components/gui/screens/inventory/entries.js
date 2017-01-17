import angular from 'angular';

import template from './entries.html';
import controller from './entries.controller';

let entriesModule = angular.module('app.components.gui.screen.inventory.entries', [])
    .component('entries', {
        template,
        controller,
        bindings: {
            entries: '<'
        }
    });

export default entriesModule;