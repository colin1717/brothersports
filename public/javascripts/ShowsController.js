angular
  .module("brotherSportsApp")
  .controller("ShowsController", ShowsController);

  function ShowsController(){
    var self = this;

    this.showList = [
      {date: "July 16th", venue: "Barracuda", memo: "other bands playing"}
    ];
  }
