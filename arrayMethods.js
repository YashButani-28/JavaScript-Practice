//--------------Array--------------




//1) -------------
const cars=["Volvo","BMW","Toyota"];

// replace first element of array
let index=cars.indexOf("Volvo");
cars[index]="Maruti";
console.log(cars);

//Check whether this element is present in Array or not.
let checkElement=cars.includes("Volvo");
console.log("Is Volvo exist in Array? " + checkElement);

//Add element into an array.
cars.push("Volkswagen");
cars.push("scoda");
console.log(cars);

// from index 2 all element replaces with "Suzuki" value.
let fillValue=cars.fill("Suzuki",2,4); 
console.log(fillValue);

//Use Map() for Array element to Uppercase .
const uppercaseCar=cars.map(element=>element.toUpperCase())
console.log(uppercaseCar);

//Reduce() element convert into Uppercase without Arrow Function and with normal function.
function toUpperCaseAccumulator(accumulator, ele) {
    accumulator.push(ele.toUpperCase());
    return accumulator;
  }
  const uppercase = cars.reduce(toUpperCaseAccumulator, []);
  console.log(uppercase);
 
  
// Use Reduce() to create a new array with lowercase values
const lowercaseCar = cars.reduce((accumulator, ele) => {
  accumulator.push(ele.toLowerCase());
  return accumulator;
}, []); // Start with an empty array

console.log(lowercaseCar);  


//Capitalize the Array Element using Map()
  
  const filterAndCapitalize=((cars)=> {
   return cars.map(ele=>ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase())
  }) 
  const capitalize=filterAndCapitalize(cars)
  console.log("Capitalize the Array Element: "+ capitalize);

//   last element deleted 
  cars.pop()
  console.log(cars); //['Maruti', 'BMW', 'Suzuki', 'Suzuki']

   
 



// 2) ---------------
const marks=[35,50,80,90,75,46,0,8,49]

// Passing Marks 
const passingMarks=marks.filter((ele)=>ele>=35)
console.log(passingMarks)  //[35, 50, 80, 90, 75, 46, 49]

// Total Marks 
const totalMarks=marks.reduce((acc,mark)=>acc+mark,0)
console.log("Total Marks: " + totalMarks); //[433]

// Find index of based on condition 
const findIndex = marks.findIndex(num => num > 75);
console.log("First index which greater than 75 Narks: "+findIndex);  //[2]

//ForEach on array with condition for division of marks
const dividedMarks=[];
const Marks=marks.forEach((mark)=>dividedMarks.push(mark/2))
console.log("Marks divided by 2:"+dividedMarks);   //[17.5,25,40,45,37.5,23,0,4,24.5]

// Highest marks from array using forEach and Turnary operator AND template literals
let highestMarks=0;
marks.forEach(mark=>mark>highestMarks?highestMarks=mark:highestMarks);
console.log(`Highest marks is:${highestMarks}`); //[90]

//sorting of marks: 

// ascending 
const ascending=marks.sort((a,b)=>a - b)
console.log("Ascending Order of Marks: " + ascending); //[0,8,35,46,49,50,75,80,90]

// descending
const descending=marks.sort((a,b)=>b - a)
console.log("Descending Order of Marks: " + descending);  //[90,80,75,50,49,46,35,8,0]

// find Method 
let first = marks.find(myFunction);
console.log(first);         //return 90 first element > 50

function myFunction(value, index, array) {
  return value > 50;
}

let findIndex1 = marks.findIndex(myFunction);
console.log(findIndex1);         //return 0 index of first element > 50

function myFunction(value, index, array) {
  return value > 50;
}
 

let last = marks.findLast(x => x > 40);
console.log(last);      //46 

let lastIndex = marks.findLastIndex(x => x > 40);
console.log(lastIndex);    //5


//   using Sort() method MIN,MAX
let minimum= marks.sort((a,b)=>a-b)
console.log(minimum[0]);       //0

let maximum= marks.sort((a,b)=>b-a)
console.log(maximum[0]);       //90


// using function MIN,MAX
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
  console.log(myArrayMin(marks));     //0

function myArrayMix(arr) {
    return Math.max.apply(null, arr);
  }
  console.log(myArrayMix(marks));      //90

  



// 3) -------------------------- 
const colors=["Yellow","Red","Blue","Green"];
console.log(colors);   //['Yellow', 'Red', 'Blue', 'Green']

// slice method 
let color=colors.slice(1,3);
console.log(color); // ['Red', 'Blue']

// splice method 
colors.splice(1,1,"white","pink");
console.log(colors);  //['Yellow', 'white', 'pink', 'Blue', 'Green']

// join method 
let deshJoin=colors.join("-")
console.log(deshJoin);  //Yellow-white-pink-Blue-Green

//4) --------------- 

const country=["India","Australia","New Zealand","South Africa","Zimbabve"];
const city=["Ahmedabad","Rajkot","Surat"];

let length=country.length;
console.log(length); //5

let countryString=country.toString();
console.log(countryString);   //India,Australia,New Zealand,South Africa,Zimbabve

let element=country.at(3);
console.log(element);       //South Africa

//Remove element at start
country.shift()
console.log(country);      //['Australia', 'New Zealand', 'South Africa', 'Zimbabve']

//Add element at start
country.unshift("Bharat")
console.log(country);          // ['Bharat', 'Australia', 'New Zealand', 'South Africa', 'Zimbabve']

// Concat two arrays
const international=country.concat(city);
console.log(international);        // ['Bharat', 'Australia', 'New Zealand', 'South Africa', 'Zimbabve', 'Ahmedabad', 'Rajkot', 'Surat']

city.copyWithin(2, 0, 2);
console.log(city);          // ['Ahmedabad', 'Rajkot', 'Ahmedabad']


// flat method 
const myArr=[1,2,3,4,5,6]
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);        // [1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60]

// country Array:
// const country=["India","Australia","New Zealand","South Africa","Zimbabve"];
const indexAustralia=country.indexOf("Australia")
console.log(indexAustralia);    //1

const indexNewzealand=country.lastIndexOf("New Zealand") + 1;
console.log(indexNewzealand);    //3

let ascSort=country.sort()
console.log(ascSort);       // ['Australia', 'Bharat', 'New Zealand', 'South Africa', 'Zimbabve']   

let descSort=country.reverse()
console.log(descSort);      //['Zimbabve', 'South Africa', 'New Zealand', 'Bharat', 'Australia']


//5) ----------

  const arr=[10,20,30,40,50];

  arr.forEach((ele)=>{console.log(ele*2);
   });          // 20,40,60,80,100

   const newArr1 = arr.flatMap(x => [x, x * 10]);
   console.log(newArr1);       // [10, 100, 20, 200, 30, 300, 40, 400, 50, 500]
   
   const filterEle=arr.filter((e)=>e>30);
   console.log(filterEle);      //[40, 50]

   const mapEle = arr.map((e)=>e*5);
   console.log(mapEle);        // [50, 100, 150, 200, 250]
   
   const reduceEle=arr.reduce((acc,e)=>acc+e,0)
   console.log(reduceEle);  //150

//    must true all satisfy condition
   const every=arr.every((e)=>e>30)
   console.log(every);  //false

//    at least one true satisfy condition
   const some=arr.some((e)=>e>20)
   console.log(some);   //true
   
//    find keys from array  
   const keys = arr.keys();

   let text = "";
   for (let x of keys) {
     text += x +" ";
   }
   console.log(text);

   //    find key and values from array
   const all = arr.entries();

   let text1= "";
   for (let x of all) {
     text1 += x +" ";
   }
   console.log(text1);

//    change element without affecting original array 
const changeEle = arr.with(2, 300);
console.log(changeEle);

//    merge all the array using spread operator 
let allArray=[...cars,...marks,...arr];
console.log(allArray);      //  ['Maruti', 'BMW', 'Suzuki', 'Suzuki', 90, 80, 75, 50, 49, 46, 35, 8, 0, 10, 20, 30, 40, 50]

// check whether array or not 
let checkingArray=Array.isArray(cars)
console.log(checkingArray);   //true

// convert array to string 
let convertString= cars.toString()
console.log(convertString);   //Maruti,BMW,Suzuki,Suzuki

let from=Array.from(cars);
console.log(from);  

let of=Array.of(cars,marks);
console.log(of);

   


  
  
  
  


  
