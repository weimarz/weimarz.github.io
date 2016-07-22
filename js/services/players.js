app.factory('players', ['$http', function($http) {
  return $http.get('data/players.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);