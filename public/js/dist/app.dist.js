angular.module('myapp', ['ui.router']);

angular.module('myapp').config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      url: '/',
      templateUrl: '/views/partials/root.html'
    })
})