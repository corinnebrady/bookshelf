var app = angular.module('bookshelfApp', []);

app.controller('BookshelfController', ['$scope', function(scope) {

  var titles = ['Something Rotten', 'Breakfast of Champions', 'Yada yada'];
  scope.books = titles;

  scope.add = function() {
    scope.books.push(scope.newBook);
    scope.newBook = '';
  };

  // scope.edit = function(book) {

  //   console.log(scope.books);
  // };

  scope.delete = function(book) {
    var index = scope.books.indexOf(book);
    scope.books.splice(index, 1);
    console.log(scope.books);
  };



}]);