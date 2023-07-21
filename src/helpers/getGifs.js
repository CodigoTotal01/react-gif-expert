//De esta forma no procesara en memoria para el redibujo del estado nun
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4BOdRXh4laRMnt23mca4u1x3C4kAO9C8&q=${category}&limit=20`
    //solo se usa fetch en una funcion asyncrona
    const resp = await fetch(url);
    const {data} = await resp.json();

    //? REalemente es neceario que esta funcion este aqui?
    const gifs =data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs;
}