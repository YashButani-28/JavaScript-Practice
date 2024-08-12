// ---- Data Tyes ------

// //Let once declare they only reassign, not redeclare.
// let a=10;
// a=12;
// console.log("Let keyword :",a)

// //Var once declare they ressign and redeclare.
// var b=20;
// var b=22;
// console.log("Var keyword :",b)

// //Const once declare they only it will fix, not redeclare or reassign.
// const c=30;
// console.log("Contant keyword :",c)


// let x=10;
// let y="rr"
// {
//      x=20;
//      let y=39;

// }
// console.log(x);
// console.log(y);


// const abc=25;
// var ac=50;
// console.log(ac)

// ---- FUNCTIONS ------

// => normal function :

// function sum(a=8,b=9){
//     return a+b;
// }
// let x=sum();
// console.log(x);

// => Arrow function :

// const sum1 =(p,q)=> p*q;
// let y = sum1(5,6)
// console.log(y);



// OBJECTS

// const trainee = {
//     firstname: "Yash",
//     lastname: "Butani",
//     id: "00110",
//     city: "Rajkot",
//     Graduation: "Bachlors of Engineering",
//     fullName:	function() {return this.firstname + " " + this.lastname;}
// }

// => using FOR OF loop:
// for(let [i,j] of Object.entries(trainee)){
//     console.log(i,":",j);

// }
// for (let key in trainee) {
//     if (trainee.hasOwnProperty(key)) {
//       console.log(key + ": " + trainee[key]);
//     }
//   }
// console.log(trainee.fullName());


// => using FOR IN loop:
// for(let i in trainee){
//     console.log(i,":",trainee[i]);

// }

// => Using FOR loop:

// => Object.keys

// const keys = Object.keys(trainee);
// for (let i = 0; i < keys.length; i++) {
//     const key=keys[i] ;
//     console.log(key,":",trainee[key]);
// }

//DELETE PROPERTIES:
// delete trainee.city;

// => Object.values

// const values = Object.values(trainee);
// for (let i = 0; i < values.length; i++) {
//    console.log(values[i]);
// }



//ADDING PROPERTIES:
// trainee.Language="English";


// => Object.entries
// const entries = Object.entries(trainee);
// for (let i = 0; i < entries.length; i++) {
//     const [key,value] = entries[i];
//     console.log(key + ":",value);

// }







