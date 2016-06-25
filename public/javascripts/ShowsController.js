angular
  .module("brotherSportsApp")
  .controller("ShowsController", ShowsController);

  ShowsController.$inject = ['$http'];
  function ShowsController($http){
    var self = this;

    this.showList = [

    ];

    function getShows(){
      $http
        .get('/shows')
        .then(function(response){
          console.log(response.data);
          self.showList = response.data;
        })
    }

     getShows();
     console.log(self.showList);
  }
