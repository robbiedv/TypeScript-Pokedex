"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.getElementById('app');
const pokemans = 100;
const fetchData = () => {
    for (let i = 1; i <= pokemans; i++) {
        getPokeman(i);
    }
};
const getPokeman = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = yield data.json();
    const pokemanType = pokeman.Typescript
        .map((poke) => poke.type.name)
        .join(", ");
    const transformedPokeman = {
        id: pokeman.id,
        name: pokeman.name,
        image: `${pokeman.sprites.front_defualt}`,
        type: pokemanType,
    };
    showPokeman(transformedPokeman);
});
const showPokeman = (pokemon) => {
    let output = `
      <div class="card">
        <span class="card--id">#${pokemon.id}</span>
        <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
        <h1 class="card--name">${pokemon.name}</h1>
        <span class="card--details">${pokemon.type}</span>
      </div>
    `;
    container.innerHTML += output;
};
fetchData();
