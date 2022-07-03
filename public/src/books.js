//use find array function to locate author with matching id 
function findAuthorById(authors, id) {
  return authors.find((writer => writer.id === id))
}
//use find array function to locate book with matching id 
function findBookById(books, id) {
  return books.find((literature => literature.id === id )) 
}

// create variables to hold the array information
// filter through books to see which categories to send them to. 
// push arrays into bookStatuses
function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = [];
  let borrowedBooks = [];
  const bookStatuses = [];

  books.forEach(book => {
    book.borrows[0].returned === true? returnedBooks.push(book) : borrowedBooks.push(book)
   });
  
  bookStatuses.push(borrowedBooks)
  bookStatuses.push(returnedBooks)
  return bookStatuses;
}


//use map to return the books borrow history
//search through the accounts to find the accounts that match the book id. 
// add the account information to the borrowed books using the spread operators 
//use slice to return 10 borrowers
function getBorrowersForBook(book, accounts) {
  return book.borrows
   .map((borrow) => {
    let person = accounts.find((people) => people.id === borrow.id);
    return { ...borrow, ...person };
   })
   .slice(0, 10);
 }



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
