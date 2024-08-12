const employee = {
    firstname: "Yash",
    lastname: "Butani",
    city: "Rajkot",
    Graduation: "B.E. in CSE",
    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
};


// fetch object using FOR OF loop 
for (let [key, value] of Object.entries(employee)) {
    if (typeof value === 'function') {
        console.log(key, ": " + value.call(employee));
    } else {
        console.log(key, ": " + value);
    }

}

/*O/P:-

// firstname : Yash
// lastname : Butani
// city : Rajkot
// Graduation : B.E. in CSE
// fullname : Yash Butani */

console.log("\n");

// add age property in object 
employee.age = 21;

// delete city property in object 
delete employee.city;

// fetch object using FOR IN loop 
for (let key in employee) {
    if (typeof employee[key] === 'function') {
        console.log(key, ": " + employee[key]());
    } else {
        console.log(key, ": ", employee[key]);
    }

}

/* O/P:-
firstname :  Yash
lastname :  Butani
Graduation :  B.E. in CSE
fullname : Yash Butani
age :  21 */

const obj1 = {
    name: 'Alice',
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  };

  obj1.greet() //Hello,Alice

  const obj2 = {
    name: 'Bob',
    greet() {
      setTimeout(() => {
        console.log(`Hello, ${this.name}`);
      }, 1000);
    }
  }; 
  
  obj2.greet(); // Output: Hello, Bob
  
// ------------------------------------------------------

const Library1 = {
    name: 'Central Library',
    location: 'Surat',
    books: [], // Array to store books
  
    // Method to add a book
    addBook(book) {
      this.books.push(book);
    },
  
    // Method to list all books
    listBooks() {
      return this.books.map(book=>`${book.title} by ${book.author}`).join(', ');
    }
  };

  Library1.addBook({title:'1985',author:'Ravindranath Tagore'});
  Library1.addBook({title:'Doha',author:'Zhaverchand Meghani'});

  console.log(Library1.listBooks());
  

// --------------------- 
// Using Constructor 
  function Library2(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
  }
  
  Library2.prototype.addBook = function(book) {
    this.books.push(book);
  };
  
  Library2.prototype.listBooks = function() {
    return this.books.map(book => `${book.title} by ${book.author}`).join('\n');
  };
  
  // Creating instances
  const localLibrary = new Library2('Local Library', 'Suburbs');
  localLibrary.addBook({ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' });

  const localLibrary2 = new Library2('Local Library2', 'Suburbs2');
  localLibrary2.addBook({ title: 'The Great khali', author: 'The Khali' });
  localLibrary2.addBook({ title: 'The Great Kohli', author: 'The Khohli' });

  
  console.log(localLibrary.listBooks()); // Output: The Great Gatsby by F. Scott Fitzgerald
  console.log(localLibrary2.listBooks()); // Output: The Great Khali by The Khali
  
  
   
  





