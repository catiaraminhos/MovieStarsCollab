(function(){
    var app = angular.module('movie-collab', ['autocomplete']);

    app.constant("ACTORS", {
      "URL_SEARCH_NAME": "http://imdb.wemakesites.net/api/search"
    });

    app.directive('navbarBlue', function(){
      return{
        restrict: 'E',
        templateUrl: 'navbar-blue.html'
      };
    });

    app.controller('InputSearchController', ['$scope', 'ACTORS', function($scope, ACTORS){
      $scope.actors = [];
      var actors_ids = [];

      $scope.updateActors = function(typed){
          $scope.actors = [];
          actors_ids = [];

          $.ajax({
            url: ACTORS.URL_SEARCH_NAME,
            data: {q: encodeURI(typed)},
            crossDomain: true,
            dataType: "jsonp",
            timeout: 5000,
            success: function(data) {
              $scope.actors = [];
              actors_ids = [];
              
              angular.forEach(data.data.results.names, function(item){
                $scope.$apply(function () {
                  $scope.actors.push(item.title);
                  actors_ids.push(item.id);
                });
              });
            },
            error: function(jqXHR, textStatus, errorThrown){
              console.error(errorThrown);
            }

        });
      }
    }]);
})();
