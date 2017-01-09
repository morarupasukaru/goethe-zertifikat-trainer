// Vendor-Imports
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Interne Modul-Imports
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter, Components.name
    ])

    // Die App als Direktive exportieren
    .directive('app', AppComponent);


