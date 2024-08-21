//1)
// let promise1= new Promise((resolve,reject) => {
    
//         const success = true; 
//         if(success){
//             resolve("Operation success ")
//         }else{
//             reject("next time")
//         }
//     });

//     promise1
//     .then((message)=>{
//         console.log(message);
  
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
//         .finally(()=>{
//         console.log("run successfully!");
        
//     })
   
  

//2)
//   const myPromise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation using setTimeout
//     setTimeout(() => {
//         const success = true; // Change this to false to simulate an error

//         if (success) {
//             resolve('The operation was successful!');
//         } else {
//             reject('The operation failed.');
//         }
//     }, 2000); // 2 seconds delay
// });

// myPromise
//     .then((message) => {
//         console.log(message); // Will log 'The operation was successful!' if success is true
//     })
//     .catch((error) => {
//         console.error(error); // Will log 'The operation failed.' if success is false
//     });



//3) 
//     const promise12=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         const a=5;
//         const b=3;

//         if(typeof(a+b)===Number){
//             resolve("IT IS NUMBER");
//         }else{
//             reject("IT IS NOTE A NUMBER");
//         }
//         console.log(typeof (a+b));
        

//     },2000);
// });

      
//     promise12
//         .then((message) => { 
//             console.log(message); 
//         })
//         .catch(error => {
//             console.error(error); 
//         })
//         .finally(() => {
//             console.log("message123");
//         });
    


//4) 


// function fetchUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // Parse the JSON from the response
//         })
//         .then(data => {
//             console.log('User Data:', data);
//             return data; // Return the data for further chaining if needed
//         })
//         .then(name => {
//             if(name==='Ervin Howell')
//             console.log('Name:', name);
//             return name; // Return the data for further chaining if needed
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         })
//         .finally(() => {
//             console.log('Fetch attempt finished.');
//         });
// }

// // Call the function to fetch users
// console.log(fetchUsers());



    // Function to fetch country data and display country names
function fetchCountryNames() {
    return new Promise((resolve, reject) => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); 
            })


            .then(data => {
                const countryNames = data
                    .filter(country => country.name && country.name.common) // Filter out entries with null or undefined names
                    .map(country => country.name.common || 'Unknown'); // Replace missing names with 'Unknown'
                resolve(countryNames); // Resolve the promise with the country names
            })

            .catch(error => {
                reject(`There was a problem with the fetch operation: ${error}`); // Reject the promise if there's an error
            });
    });
}
''
// Call the function to fetch country names and handle the Promise
fetchCountryNames()
    .then(countryNames => {
        const countryList = document.getElementById('container');

        if (!countryList) {
            throw new Error('Element with ID "country-Id" not found');
        }

        // Create and append list items for each country name
        countryNames.forEach(name => {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            countryList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error(error); // Log any errors that occurred
    })
    .finally(() => {
        console.log('Fetch attempt finished.'); // Log when the fetch attempt is complete
    });
