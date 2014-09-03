var app = angular.module('bookshelfApp', []);

app.controller('BookshelfController', ['$scope', function(scope) {
  var titles = ['Pandemonium', 'Behind the Scenes at the Museum', "Winter's Tale"];
  scope.books = titles;

  scope.add = function() {
    scope.books.push(scope.newBook);
    scope.newBook = '';
  };

  scope.delete = function(book) {
    var index = scope.books.indexOf(book);
    console.log(scope.books[index]);
    console.log(index);
    scope.books.splice(index, 1);
  };

  scope.edit = function() {
    hide = true;
  };

  scope.editing = function() {
    return show;
  }

  scope.save = function(editedBook) {
    var index = scope.books.indexOf(editedBook);
    scope.books[index] = editedBook;
    console.log(scope.books[index]);
    console.log(index);
    console.log(editedBook);


  };


}]);