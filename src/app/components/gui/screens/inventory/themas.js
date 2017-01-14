import angular from 'angular';

import template from './themas.html';
import controller from './themas.controller';

let themasModule = angular.module('app.components.gui.screen.inventory.themas', [])
    .component('themas', {
        template,
        controller,
        bindings: {
            data: '<'
        }
    });

export default themasModule;