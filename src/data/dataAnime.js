export const animeAll = async (page)=>{
    const res = await fetch("https://api.jikan.moe/v4/anime?page="+page)
    const data = await res.json()
    return data
}

export const animeNavegate= async(url)=>{
    const res = await fetch (url)
    const data= await res.json()
    return data
}

export const animeRecomend = async ()=>{
    const res = await fetch("https://api.jikan.moe/v4/anime/1/recommendations")
    const data = await res.json()
    return data
}

export const buscarAnime = async (obj, pag)=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?letter=${obj.busqueda}&page=${pag}`)
    const data = await res.json()
    return data
}

export const getAnime = async (id) =>{
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
    const data = await res.json()
    return data
}