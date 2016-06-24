angular
    .module("brotherSportsApp", ['ui.router'])
    .config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../templates/home.html'
    })
    .state('shows', {
      url: '/shows',
      templateUrl: '../templates/shows.html'
    });

    $urlRouterProvider.otherwise('/');
}
