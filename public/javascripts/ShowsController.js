angular
  .module("brotherSportsApp")
  .controller("ShowsController", ShowsController);

  ShowsController.$inject = ['$http'];
  function ShowsController($http){
    var self = this;

    this.showList = [];
    this.newsList = [];

    function getShows(){
      $http
        .get('/shows')
        .then(function(response){
          self.showList = response.data;
        })
    }

    function getNews(){
      $http
        .get('/news')
        .then(function(response){
          self.newsList = response.data;
        })
    }

    this.deleteShowItem = function(showId){
      $http
        .delete('/shows/' + showId)
        .then(function(response){
          getShows();
        })
    }

    this.deleteNewsItem = function(newsId){
      $http
        .delete('/news/' + newsId)
        .then(function(response){
          console.log(response);
          getNews();
        })
    }

     getShows();
     getNews();
  }
