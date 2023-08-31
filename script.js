// {/* <div id="joke" class="joke">Awesome joke is loading....</div> */}
//         {/* <button id="jokeBtn" class="btn">Next JOKE</button> */}


//         PROMISES
// //90%promises create 
// // GET https://icanhazdadjoke.com/

const jokes=document.querySelector('#joke');
const jokeBtn=document.querySelector('#btn');
const generateJokes=()=>{
    const setHeader={
        headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res)=>res.json())
.then((data)=>{
    jokes.innerHTML=data.joke;
}).catch((error)=>{
        console.log(error);
    })
}



jokeBtn.addEventListener('click',generateJokes);
generateJokes();
// const btnE1=document.getElementById("btn");
// const jokeE1=document.getElementById("joke");
// const apiKey="Ox2kwieOsny7uKPBvzDVEQ==plBRlGOUfo2UU0yi";
// const options={
//     method:"GET",
//     headers:{
//         "X-Api-Key":apiKey,
//     },
// };
// const apiURL="https://api.api-ninjas.com/v1/jokes?limit=1"
// async function getJoke()
// {
//     jokeE1.innerText="Ruko Jara Sabar Karo...";
//     const response= await fetch(apiURL,options);
//     const data= await response.json();
//     // console.log(data);
//     jokeE1.innerHTML=data[0].joke;
// }

// btnE1.addEventListener('click',getJoke);