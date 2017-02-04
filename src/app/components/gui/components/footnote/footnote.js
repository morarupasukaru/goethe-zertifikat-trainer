import angular from 'angular';

import template from './footnote.html';
import './footnote.css';

let footnoteModule = angular.module('app.components.gui.components.footnote', [])
    .component('footnote', {
        template
     });

export default footnoteModule;