angular
  .module("brotherSportsApp")
  .controller("ShowsController", ShowsController);

  function ShowsController(){
    var self = this;

    this.showList = [
      {date: "July 16th", venue: "Barracuda", memo: "Brother Sports and Yo Yo Ma"},
      {date: "July 20th", venue: "Mohawk", memo: "Brother Sports, Slayer, and Tom Petty"}
    ];

    return this;
  }
