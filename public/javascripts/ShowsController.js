angular
  .module("brotherSportsApp")
  .controller("ShowsController", ShowsController);

  ShowsController.$inject = ['$http'];
  function ShowsController($http){
    var self = this;

    this.showList = [];

    function getShows(){
      $http
        .get('/shows')
        .then(function(response){
          self.showList = response.data;
        })
    }

     getShows();
  }
