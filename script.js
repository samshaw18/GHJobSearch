async function readCat() {
let response = await fetch('https://api.chucknorris.io/jokes/categories');
let categories = await response.json();

buildNav(categories)
}
readCat()


function buildNav(cat) {
    let aNav=''
   for (let i = 0; i < cat.length; i++) {
       aNav+=` <a class="nav-item nav-link" href="#" onclick="showJoke(this)">${cat[i]}</a>`  
   }
    document.getElementById('nav').innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
     ${aNav}
    </div>
  </div>
</nav>
    `
}
function showJoke(el) {
    console.log(el.innerHTML);
    getJoke(el.innerHTML)
    
    
}
async function getJoke(cat) {
    let response = await fetch('https://api.chucknorris.io/jokes/random?category='+cat);
    let joke = await response.json(); 
    console.log(joke.value);
    
    jokeHtml(joke.value)
}

function jokeHtml(joke) {
    document.getElementById('joke').innerHTML=`
    <div class="alert alert-primary" role="alert">
  ${joke}
</div>
    `
    
}