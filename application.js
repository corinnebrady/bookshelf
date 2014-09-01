var app = angular.module('bookshelfApp', []);

app.controller('BookshelfController', ['$scope', function($scope) {

  $scope.books = ['1984', 'Wind-up Bird Chronicles', 'Dress Your Family in Curdoroy and Denim'];

}]);

