var app = angular.module( 'Bookshelf', [] );

app.controller('ShelfController', function() {
  this.books = reads;
});

var reads = [
  {
    cover:  'http://www.ideafountain.ca/uploads/1/4/0/7/14070919/9769606_orig.jpg',
    title:  'Wind-up Bird Chronicles',
    author: 'Haruki Murakami',
    isbn:   '8129119234',
    rating:  4,
  },
  {
    cover:  'http://2.bp.blogspot.com/_nXknRDZBs0E/SeXJpyFTVsI/AAAAAAAADnw/O90VoEQE_Vo/s400/1984_2.jpg',
    title:  '1984',
    author: 'George Orwell',
    isbn:   '0451524934',
    rating:  4,
  },
  {
    cover:  'http://upload.wikimedia.org/wikipedia/en/1/1a/DressYourFamilyInCorduroyAndDenimCover.JPG',
    title:  'Dress Your Family in Curdoroy and Denim',
    author: 'David Sedaris',
    isbn:   '0965904830',
    rating:  3,
  }
];

