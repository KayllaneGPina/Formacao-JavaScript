const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecord = 151
const limit = 10
let offset = 0

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="flipCard(this)">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
                    </div>
            </div>

            <div class="habilidades">
                <h5>Habilidades Especiais</h5>
                <ol class="ability">
                    ${pokemon.ability.map((abilities) => `<li class="abilities ${abilities}">${abilities}</li>`).join('')}
                </ol>
            </div>

        </li>
    `
}

pokemonList.addEventListener('click', (event) => {
    const pokemon = event.target.closest('.pokemon')
    if (pokemon) {
        pokemon.classList.toggle('flipped')
    }
})

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    qtdRecordsNextPage = offset + limit

    if(qtdRecordsNextPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

})
