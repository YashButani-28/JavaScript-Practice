// class customErrors extends Error{
//     constructor(message){
//         super(message);
//         this.name="CustomError";
//     }
// }

// try{
//     throw new customErrors("this is custom errors!!!");
// }catch(error){
// console.log(error.name);
// console.log(error.message);
// }




// try {
//     let result = riskyFunction();
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }finally{
//     console.log("Cleanup actions be perfomed here!");
    
//   }



//   function divide(a, b) {
//     if (b === 0) {
//       throw new Error("Division by zero is not allowed.");
//     }
//     return a / b;
//   }
  
//   try {
//     let result = divide(10, 5);
//   } catch (error) {
//     console.error(error.message); // "Division by zero is not allowed."
//   }finally{
//     console.log(error.message);
    
//   }



// let invalidurl="https://api.publicapis.org/entries"

// async function fetchData() {
//     try {
//       let response = await fetch('invalidurl');
//      var data = await response.json();
//     } catch (error) {
//       console.error("Fetch error:",+error);
//     }finally{
//         console.log(data);
        
//     }
//   }
  
//   fetchData();
  