//create a helper function to find the id for function findAccountById(accounts, id)
const helperFindAccount = (array, identification) => array.find(arr => arr.id === identification)

//add helper function to function findAccountById
function findAccountById(accounts, id) {
  return helperFindAccount(accounts, id);
}
 
//use sort to arrange accounts in order by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()? 1:  -1)
}



//loop through the books array 
//loop through the the borrows array
//increment total by 1 for every found match 
function getTotalNumberOfBorrows(account,books) {
  let bookCount = [];
  books.forEach(book => book.borrows.forEach(borrower => {
      if(borrower.id === account.id){
          bookCount.push(1)
        }
  }))
 return bookCount.reduce((total,count) => total + count, 0 )
}
 
//create 2 variables for arrays
//use forEach to check each index in array
//create a new object
//deconstruct story and make the author and borrow key equal an empty objct
//use for each to check the borrows index for each item in the book indexs
//create a conditional statement that determines where to push the data to
//declare new values for author & borrows 
//return information 
function getBooksPossessedByAccount(account, books, authors) {
   let booksRented = [];
   let match = [];
   books.forEach((index) => {
    const borrowed = index.borrows;
    const story = {
     id: index.id,
     title: index.title,
     genre: index.genre,
     authorId: index.authorId,
     author: {},
     borrows: {}
    };
    const { id, title, genre, authorId, author, borrows } = story;
 
    borrowed.forEach((borrow) => {
     if (borrow.id === account.id && borrow.returned === false) {
      booksRented.push(story);
      match.push(borrow);
      story.borrows = match;
      story.author = authors.filter((writer) => writer.id === story.authorId)[0];
     }
    });
   });
   return booksRented;
  }



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
