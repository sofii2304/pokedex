const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}


const createPokemonCard = (pokemon) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.style.backgroundColor = colors[pokemon.types[0].type.name];

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = pokemon.sprites.other.dream_world.front_default || pokemon.sprites.other['official-artwork'].front_default;
    img.alt = pokemon.name;

    imgContainer.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('info');

    const number = document.createElement('span');
    number.classList.add('number');
    number.innerText = `#${pokemon.id.toString().padStart(3, '0')}`;

    const name = document.createElement('h3');
    name.classList.add('name');
    name.innerText = pokemon.name;

    const type = document.createElement('small');
    type.classList.add('type');
    type.innerHTML = `Type: <span>${pokemon.types[0].type.name}</span>`;

    info.appendChild(number);
    info.appendChild(name);
    info.appendChild(type);

    pokemonElement.appendChild(imgContainer);
    pokemonElement.appendChild(info);

    poke_container.appendChild(pokemonElement);
}

fetchPokemons();
