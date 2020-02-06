async function search(id) {
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await Response.json()
    return pokemon
}

export default search