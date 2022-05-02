
export const getGifs = async (api_key,dataSearch,limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${dataSearch}&lang=es&limit=${limit}`;
    const respData =  await fetch(url);
    const { data } = await respData.json();
    const gifs = data.map(img => {
        const url  = img.images.downsized_medium.url;
        const title = (img.title).toUpperCase();
        return {
            id:img.id,
            title:title,
            url:url
        }
    })

    return gifs;
}