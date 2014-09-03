var app = angular.module('bookshelfApp', []);

app.controller('BookshelfController', ['$scope', function(scope) {
  scope.books = ['Olive Readers', 'Villa Incognito', 'Night', 'Spetacular Now'];

  scope.add = function() {
    scope.books.push(scope.newBook);
    scope.newBook = '';
  };

  scope.delete = function(book) {
    var book_index = scope.books.indexOf(book);
    scope.books.splice(book_index, 1);
  };

  scope.edit = function(book) {
    scope.editing = book;

  };

  scope.save = function(book, editedBook) {
    var original_book_index = scope.books.indexOf(book);
    scope.books[original_book_index] = editedBook;
    scope.editing = null;
  };

  scope.cancel = function() {
    scope.editing = null;
  };



}]);