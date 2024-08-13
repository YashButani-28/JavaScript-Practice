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

  // const obj2 = {
  //   name: 'Bob',
  //   greet() {
  //     setTimeout(() => {
  //       console.log(`Hello, ${this.name}`);
  //     }, 1000);
  //   }
  // }; 
  
  // obj2.greet(); // Output: Hello, Bob
  
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

  
//  CREATE AN ACCOUNT CONSTRUCTOR AND STORE THE CUSTOMER DETAILS IN IT. 

//  Store data into an Array 

  function bankAccount(name,acc_no,mobile_no,email_id,address){
    this.name=name;
    this.acc_no=acc_no;
    this.mobile_no=mobile_no;
    this.email_id=email_id;
  }

const accountList=[];
  const acc1=new bankAccount("yash","00001","1234567890","y@gmail.com");
  const acc2=new bankAccount("kano","00002","1234567891","k@gmail.com");

  accountList.push(acc1);
  accountList.push(acc2);

  // console.log(accountList);

  for(let account of accountList){
    for(let [key,value] of Object.entries(account))
    console.log(key,":",value);
  console.log("\n");
}
  


// ---- Store data into an object 

// Define the bankAccount constructor function
function bankAccount1(name, acc_no, mobile_no, email_id) {
  this.name = name;
  this.acc_no = acc_no;
  this.mobile_no = mobile_no;
  this.email_id = email_id;
}

const accountList1 = {};

const acc11 = new bankAccount("yash1", "000011", "0987654321", "y1@gmail.com");
const acc12 = new bankAccount("kano1", "000022", "1987654321", "k1@gmail.com");

accountList1[acc11.acc_no] = acc11;
accountList1[acc12.acc_no] = acc12;


for (const [acc_no, account] of Object.entries(accountList1)) {
  console.log(`Account Number: ${acc_no}}`);
  for (const [key, value] of Object.entries(account)) {
      console.log(`${key}: ${value}`);
  }
  console.log("\n");
}

// ------------------------------ 

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

// ----------------------------------- 
// REGISTER BANKS (only register)
// function Bank(name,location){
//   this.name=name;
//   this.location=location;
//   this.bankList=[];
// }

// Bank.prototype.addBank=function(bank){
//   this.bankList.push(bank)
// };


// Bank.prototype.formatBankDetails = function() {
//   return this.bankList.map(bank => 
//     `IFSC: ${bank.IFSC}\nBranch: ${bank.branch}`
//   ).join('\n\n'); // Separate each bank's details with an extra newline for readability
// };

// Bank.prototype.displayDetails = function() {
//   return `Bank Name: ${this.name}\n` +
//          `Location: ${this.location}\n` +
//          `${this.formatBankDetails()}`;
// };

// const bank1=new Bank("BoB","Jetpur");
// bank1.addBank({IFSC:"BARB0JETPUR",branch:"STAND CHOWK JETPUR"});
// console.log(bank1.displayDetails());

// const bank2=new Bank("ICICI","Ahmedabad");
// bank2.addBank({IFSC:"ICIC1AHMD",branch:"GANESH MEDIAN,GUJARAT HIGH COURT"});
// console.log(bank2.displayDetails());



// ----------------------------------------------- 
// REGISTER BANKS (register and categarised)
// Constructor function for Bank
function Bank(name, location) {
  this.name = name.toUpperCase();
  this.location = location;
  this.bankList = [];
}

// Method to add a bank to the bankList
Bank.prototype.addBank = function(bank) {
  this.bankList.push(bank);
};

// Method to format each bank's details
Bank.prototype.formatBankDetails = function() {
  return this.bankList.map(bank => 
    `IFSC: ${bank.IFSC}\nBranch: ${bank.branch}`
  ).join('\n\n'); // Separate each bank's details with an extra newline
};

// Method to display all details of the Bank instance
Bank.prototype.displayDetails = function() {
  return `Bank Name: ${this.name}\n` +
         `Location: ${this.location}\n` +
         `Details:\n${this.formatBankDetails()}`;
};

// Bank Manager to categorize and store banks
const BankManager = {
  banks: {},

  addBank(bankName, bankLocation, bankDetails) {
    const upperBankName = bankName.toUpperCase();
    if (!this.banks[upperBankName]) {
      this.banks[upperBankName] = new Bank(upperBankName, bankLocation);
    }else if(this.banks[upperBankName].location !== bankLocation) {
            // If location changes, you may handle it differently if needed
            console.log(`Warning: Location for ${upperBankName} does not match existing records.`);
          }
    this.banks[upperBankName].addBank(bankDetails);
  },

  displayAll() {
    for (const bankName in this.banks) {
      console.log(this.banks[bankName].displayDetails());
    }
  }
};

// Create and add banks to the manager
BankManager.addBank("BoB", "Jetpur", { IFSC: "BARB0JETPUR", branch: "STAND CHOWK JETPUR" });
BankManager.addBank("ICICI", "Ahmedabad", { IFSC: "ICIC1AHMD", branch: "GANESH MEDIAN, GUJARAT HIGH COURT" });
BankManager.addBank("BoB", "Mumbai", { IFSC: "BARB0MUMBAI", branch: "DADAR MUMBAI" }); 
BankManager.addBank("icici", "Baroda", { IFSC: "ICIC1BRD", branch: "CHHANI ROAD" }); 


// Display all bank details categorized by name
BankManager.displayAll();


// ==================================== 

const ArrayData=["cricket","football",350,790,80]

let numbers=ArrayData.filter(e=>typeof e==="number");
numbers.sort((a,b)=>a-b)

let strings=ArrayData.filter(e=>typeof e==="string")
strings.sort();

let sort=numbers.concat(strings)
console.log(sort);






