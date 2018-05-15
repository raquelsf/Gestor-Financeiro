angular.module('Financas').constant('consts', {
  appName: 'api',
  version: '1.0',
  owner: 'Raquel Freitas',
  year: '2017',
  site: 'http://cod3r.com.br',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
