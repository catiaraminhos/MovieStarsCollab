(function(){
    var app = angular.module('movie-collab', ['autocomplete']);

    app.directive('navbarBlue', function(){
      return{
        restrict: 'E',
        templateUrl: 'navbar-blue.html'
      };
    });

    app.controller('InputSearchController', function($scope){
      $scope.actors = ["Jack Nicholson", "Johnny Depp", "Christian Bale",
                      "Brad Pitt", "Leonardo DiCaprio", "Daniel Day-Lewis",
                      "Robert Downey, Jr.", "Marlon Brando"];

      $scope.updateActors = function(typed){
          $scope.actors = $scope.actors;
      }
    });
})();
