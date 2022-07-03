//use arrow function to get total 
const getTotalBooksCount = books => books.length ;

//use the an arrow function to get the total number of accounts
 const getTotalAccountsCount = accounts => accounts.length 

// filter through books to find the books that are currently being borrowed.
// then return lengh of those books. 
 function getBooksBorrowedCount(books){ 
const unavailableBooks = books.filter(book => book.borrows[0].returned === false);
 return unavailableBooks.length
};


// getMostCommonGenres()
//create a vairable for an empty object array
//use forEach to see if a variable will 
function getMostCommonGenres(books) {
  let bookGenre = {}
  books.forEach(book => {
    if(bookGenre[book.genre]){
      bookGenre[book.genre]++;
    } else {
      bookGenre[book.genre] = 1
    };
  });
return Object.entries(bookGenre).map(([name, count]) => {
  return {
  name,
  count
  };
})
.sort((a,b) => b.count - a.count)
.slice(0,5)
}

//use the map method to map array function to gather the name and number of borrows of a book. 
//create a key for count. 
//get the lenght all the objects in the borrow category
//use sort 
//slice 
function getMostPopularBooks(books) {
  return books
   .map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   .slice(0, 5);
 }


 //create a variable for an empty array 
/*Use the forEach method to create an object for each authors informatin and count for borrowed books */
//use a conditional statement that will add the borrows.lenth to the the count object 
//push the authors information into the result array. 
//sort results then use slice to display the top 5 authors 

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
