var app = angular.module('BookshelfApp', []);

app.controller('BookshelfController', ['$scope', function(scope) {
  var titles = ['The Outsiders', 'Use of Weapons'];
  scope.books = titles;

  scope.add = function() {
    scope.books.push(scope.newBook);
    scope.newBook = '';
  };

  scope.delete = function(book) {
    var index = scope.books.indexOf(book);

    if (index != -1) {
      scope.books.splice(index, 1);
    }
  };


  scope.editing = false;

  scope.edit = function(book) {
    scope.editing = true;
    scope.editedTitle = book;
  };

  scope.save = function() {
    scope.book = scope.editedTitle;
    scope.editing = false;
  }

}]);