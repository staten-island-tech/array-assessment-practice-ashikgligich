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

var sortedBook = Array.from(books.sort((a, b) => a.publishDate - b.publishDate));
console.log(sortedBook);


//sort books alphabetically

var sortedAlphabet = Array.from(books.sort((a,b) => a.name.localeCompare(b.name)));
console.log(sortedAlphabet);


//Find who wrote War and Peace
var warnPeace = books.find(n => n.name == 'War and Peace');
console.log(warnPeace.authorFirst + " " + warnPeace.authorLast);

//how many books were written before 1900?
var oldBook = books.filter(d => d.publishDate < 1900 ).length; 
console.log(oldBook);

//was there at least one book published within the last 100 years?
var newBook = books.some(d => d.publishDate > 1923 )
console.log(newBook);

//was every book published within the last 100 years?
var allNewBook = books.every(d => d.publishDate > 1923 )
console.log(allNewBook);


//print a list of books that "includes" the genre historical

var his = books.filter(h => h.genre.includes('historical'))
console.log(his)
