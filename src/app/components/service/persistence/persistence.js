import angular from 'angular';
import persistenceService from './persistence.service';

let persistenceModule = angular.module('app.components.service.persistence', [])
    .service('persistenceService', persistenceService);

export default persistenceModule;