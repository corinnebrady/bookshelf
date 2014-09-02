var app = angular.module('bookshelfApp', []);

app.controller('BookshelfController', ['$scope', function(scope, LS) {

  var titles = ['Little Bee', 'Someone To Run With', 'Microserfs'];
  scope.books = titles;


}]);


// function saveBook() {
//   localStorage[]
// }





// app.factory('storageService', function($rootScope) {
//   return {
//     get: function(key) {
//       returl localStorage.getItem(key);
//     }.
//     save: function(key) {
//       localStorage.setItem(key, JSON.stringify(data));
//     },
//     remove: function(key) {
//       localStorage.removeItem(key);
//     },
//     clearAll: function() {
//       localStorage.clear();
//     }
//   };
// });