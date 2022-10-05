const api = {
    //key: "64ed82577ced7f69cb1687f0ce536131",
    key: "6e2f966857d6fcace1d7be48ede3d56d",
    lang: "pt_br",
    units: "metric"
}

const city0 = document.querySelector('.city0');
const city1 = document.querySelector('.city1');
const container_img = document.querySelector('.container-img');
const type = document.querySelector('.type');
const weight = document.querySelector('.weight');
const height = document.querySelector('.height');

const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');


search_button.addEventListener('click', function () {
    searchResults(search_input.value);
});

search_input.addEventListener('keypress', enter)
function enter(event) {
    key = event.keyCode;
    if (key == 13) {
        searchResults(search_input.value);
    }
}

function searchResults(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(pokemon =>{
        if(!pokemon.ok){
            throw new Error(`http error: status ${pokemon.status}`)
        }
        return pokemon.json();
    })
    .catch(error =>{
        alert(error.message);
    })
    .then(pokemon =>{
        displayResults(pokemon);
    })
}
function displayResults(pokemon){
    console.log(pokemon);
    city0.innerText= "Nome: " +`${pokemon.name}`;
    city1.innerText= "ID: " +`${pokemon.id}`;
    container_img.innerHTML= `<img style="width: 250px; height:250px;" src="${pokemon.sprites.other.dream_world.front_default}"/>`; 
    type.innerHTML= "Tipo: " +`${pokemon.types.map(item => item.type.name).toString()}`;
    weight.innerHTML="Peso: " + `${pokemon.weight  / 10}kg`;
    height.innerHTML="Altura: " +`${pokemon.height  / 10}m`;
    
}
