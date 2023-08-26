const długopis=50
// console.log(długopis)
const div=document.getElementById("klawisz")
// console.log(div)
const button=document.getElementById("button")
button.addEventListener("click", function(){
    div.innerHTML="samochód"
})
// async function logMovies(){
    // const respan1 = fetch("https://dog.ceo/api/breeds/image/random");
    // console.log(respan1)

    // const respan2 = await fetch("https://dog.ceo/api/breeds/image/random");
    const movies = await respan2.json()
    console.log(movies)
    document.getElementById("image").innerHTML = `<p>String text ${movies.message}</p>`
// }

document.getElementById("buttom").innerHTML=x;





