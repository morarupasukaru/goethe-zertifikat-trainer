import angular from 'angular';
import persistenceService from './persistence.service';
import stackPersistenceService from './stack-persistence.service';

let persistenceModule = angular.module('app.components.service.persistence', [])
    .service('persistenceService', persistenceService)
    .service('stackPersistenceService', stackPersistenceService);

export default persistenceModule;