

async function fetchJoke(){
try {
    const response=await fetch('https://official-joke-api.appspot.com/random_joke')
    if(!response.ok){
        throw new Error("Network response was not ok");
    }

    const joke= await response.json();
    return joke; 
} catch (error) {
    console.error("Error fetching joke:",error);
    return {setup:"Error",punchline:"Failed to fetch joke"};
    }
}

async function  displayJoke() {
    const joke=await fetchJoke();

    const jokeElement=document.getElementById("joke");
    jokeElement.innerHTML=`<strong>${joke.setup}</strong><br>${joke.punchline}`;
}

document.getElementById("get-joke-button").addEventListener("click",displayJoke);
displayJoke();



async function gitHubUser(username){
    try {
        const response= await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok){
            throw new Error("User not found.")
        }

        const data=response.json();
        return data;
        
    } catch (error) {
        console.error("Error fetching user:"+error);
        return {login:'Error',
            avatar_url:'',
            name:'User not Found',
            bio:'Failed to fetch userdata'
        };
    }
}

async function displayUser() {
    const username='YashButani-28';

    const user=await gitHubUser(username);
    const userInfoElement=document.getElementById("username");


    userInfoElement.innerHTML = `
    <img src="${user.avatar_url}" alt="${user.login}">
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.login}</p>
    <p><strong>Bio:</strong> ${user.bio}</p>
`;
}
document.getElementById("user-button").addEventListener("click",displayUser)
displayUser();  

