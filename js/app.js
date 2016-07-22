var app = angular.module('LadderApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'PlayerController',
    	templateUrl: 'views/ladder.html'
 		 })
 		.when('/players/:playerId', {
    	controller: 'PlayerController',
    	templateUrl: 'views/player.html'
 		 })
 		.when('/leagues/:leagueId/', {
    	controller: 'LeagueController',
    	templateUrl: 'views/league.html'
 		 })
 		 .otherwise({
    	redirectTo: '/'
 		 });
});