var app = angular.module('bookshelfApp', []);

app.controller('BookshelfController', ['$scope', function($scope) {

  var titles = ['Book One', 'Book Two', 'Book Three'];

  $scope.books = titles;


}]);