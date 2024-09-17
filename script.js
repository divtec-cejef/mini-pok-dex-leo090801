/**
 * Exercice : Mini Pokédex
 * @author Steve Fallet <steve.fallet@dvitec.ch>
 * @since 2024-09-01
 */

'use strict';

// Couleur par défaut pour les types de Pokémon non définis
const DEFAULT_COLOR = '#ccc';

//conntient le conteneur html qui contient les pokémons
const pokemonContainer = document.querySelector(".pokemon-container");

//contient le input de la recherche des pokémons
const searchBar = document.getElementById("search-bar");

// Couleurs pour chaque type de Pokémon
const typeColors = {
    'Electrique': '#FFD700',
    'Plante': '#78C850',
    'Poison': '#A040A0',
    'Feu': '#F08030',
    'Eau': '#6890F0',
    'Normal': '#A8A878',
    'Fee': '#EE99AC',
    'Spectre': '#705898',
    'Combat': '#C03028',
    'Vol': '#A890F0',
    'Glace': '#98D8D8',
    'Roche': '#B8A038',
    'Sol': '#E0C068',
    'Psy': '#F85888'
};

// Tableau d'objets représentant les Pokémon
const pokemons = [
    { name: 'Pikachu', type: 'Electrique', level: 35, img: 'pikachu.png' },
    { name: 'Bulbizarre', type: 'Plante,Poison', level: 15, img: 'bulbizarre.png' },
    { name: 'Salamèche', type: 'Feu', level: 20, img: 'salameche.png' },
    { name: 'Carapuce', type: 'Eau', level: 10, img: 'carapuce.png' },
    { name: 'Rondoudou', type: 'Normal,Fee', level: 25, img: 'rondoudou.png' },
    { name: 'Ectoplasma', type: 'Spectre,Poison', level: 45, img: 'ectoplasma.png' },
    { name: 'Évoli', type: 'Normal,Combat', level: 22, img: 'evoli.png' },
    { name: 'Dracaufeu', type: 'Feu,Vol', level: 50, img: 'dracaufeu.png' },
    { name: 'Florizarre', type: 'Plante,Poison', level: 55, img: 'florizarre.png' },
    { name: 'Tortank', type: 'Eau', level: 52, img: 'tortank.png' },
    { name: 'Mélofée', type: 'Fee', level: 18, img: 'melofee.png' },
    { name: 'Raichu', type: 'Electrique', level: 40, img: 'raichu.png' },
    { name: 'Magicarpe', type: 'Eau', level: 5, img: 'magicarpe.png' },
    { name: 'Lokhlass', type: 'Eau,Glace', level: 35, img: 'lokhlass.png' },
    { name: 'Onix', type: 'Roche,Sol', level: 30, img: 'onix.png' },
    { name: 'Ronflex', type: 'Normal', level: 45, img: 'ronflex.png' },
    { name: 'Mewtwo', type: 'Psy', level: 70, img: 'mewtwo.png' }
];

/**
 * Crée le code HTML pour créer une carte Pokémon
 * @param pokemon Pokémon à créé la carte
 * @return le code HTML
 */
function generatePokemonCardHTML(pokemon) {

    let typesPokemon = pokemon.type.split(",");

    let codeHTMLCard = "";

    if (typesPokemon.length === 1) {
        // Cas si le pokemon a qu'un seul type
        codeHTMLCard += `<div class='pokemon-card' style ='background: ${typeColors[typesPokemon]};'>`;
    } else {
        // Cas si le pokemon a deux types
        codeHTMLCard += `<div class='pokemon-card' style ='background: linear-gradient(to right, ${typeColors[typesPokemon[0]]} 50%, ${typeColors[typesPokemon[1]]} 50%);'>`;
    }

    codeHTMLCard += `<img src='images/${pokemon.img}' alt='${pokemon.name}'>` +
        `<h2>${pokemon.name}</h2>` +
        `<div>Type: ${typesPokemon.join(', ')}</div>` +
        `<div>Niveau: ${pokemon.level}</div>` +
        `</div>`;

    return codeHTMLCard;
}

/**
 * trie et filtre les pokemons
 */
function filterAndSortPokemons() {
    let searchBarValue = searchBar.value.toLowerCase();

    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchBarValue));
}

/**
 * Ajoute du HTML dans le site à l'endroit où sont affichés les pokémons pour afficher les pokémons
 * selon le tableau dans script.js
 */
function displayPokemons(){

    pokemonContainer.innerHTML = "";

    for (let pokemon of filterAndSortPokemons()) {
        pokemonContainer.innerHTML += generatePokemonCardHTML(pokemon);
    }

    /*for (let pokemon of pokemons) {
        let types = pokemon.type.split(",");

        let typesHTML = "";

        for (let type of types) {
            typesHTML += "<small>" + type + "</small> ";
        }

        pokemonContainer.innerHTML += "<p>" + pokemon.name + " " + typesHTML + "</p>";
    }*/

    if (pokemons.length === 0) {
        pokemonContainer.innerHTML = "<p>Dracaufeu a tout brûlé, aucun Pokémon ne correspond à ta recherche !</p>";
    }
}

displayPokemons();

addEventListener('load', displayPokemons);

searchBar.addEventListener('input', displayPokemons);