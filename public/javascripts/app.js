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
    .state('news', {
      url: '/news',
      templateUrl: '../templates/news.html'
    })
    .state('music', {
      url: '/music',
      templateUrl: '../templates/music.html'
    })
    .state('shows', {
      url: '/shows',
      templateUrl: '../templates/shows.html'
    })
    .state('photos', {
      url: '/photos',
      templateUrl: '../templates/photos.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '../templates/contact.html'
    });

    $urlRouterProvider.otherwise('/');
}
