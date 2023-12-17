const limit = 60
const fields = 'id,title,image_id,date_display,thumbnail,artist_title'
export const search = async (query) => {
    const apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}[is_public_domain]=true&limit=${limit}&fields=${fields}`
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`error loading search results: ${response.status}`)
    }

    return response.json();

}

