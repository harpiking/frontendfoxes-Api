const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
let output = document.querySelector("#output");
let put = document.querySelector("#put");

yes.addEventListener("click", more);
no.addEventListener("click", none);

function more(e){
    e.preventDefault();
    var value = document.querySelector(".dog-selector").value;
    console.log(value)
    let url = `https://dog.ceo/api/breed/${value}/images/random`
    fetch(url)
    .then(response => response.json())
    .then(data => {
       put.innerHTML = `<img src=${data.message} alt="lovely photo of a dog"/>`;
    });
} 

function none(e){
   e.preventDefault();
   output.innerHTML = `<h3>Thanks for Coming! Check back soon</h3>`;
} 