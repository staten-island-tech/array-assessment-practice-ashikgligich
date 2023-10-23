const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"


//Sort books from oldest to most recent
var old2newBooks = books.sort((a,b) => a.publishDate - b.publishDate);
console.log(old2newBooks);

//sort books alphabetically
var alphabetically = books.sort((a,b) => a.name.localeCompare(b.name));
console.log(alphabetically);

//Find who wrote War and Peace
var warNoPeace = books.find( b => b.name == 'War and Peace')
var author = `${warNoPeace.authorFirst} ${warNoPeace.authorLast}`;
console.log(author);

//how many books were written before 1900?
var oldBooksCount = books.filter( q => q.publishDate < 1900).length;
console.log(oldBooksCount);

//was there at least one book published within the last 100 years?
const currentYear = new Date().getFullYear();
//var anyRecentBooks = books.filter( q => q.publishDate > currentYear - 100).length > 0;
//console.log(anyRecentBooks);
var anyRecentBooks2 = books.some( q => q.publishDate > currentYear - 100);
console.log(anyRecentBooks2);

//was every book published within the last 100 years?
//var anyOldBooks = books.filter( q => q.publishDate < currentYear - 100).length > 0;
//console.log(!anyOldBooks);
var anyOldBooks2 = books.every( q => q.publishDate > currentYear - 100);
console.log(anyOldBooks2);

//print a list of books that "includes" the genre historical
var historical = books.filter(  h => h.genre.includes("historical"));
console.log(historical);

books