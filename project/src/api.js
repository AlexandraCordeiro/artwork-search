const LIMIT = 60
const ARTWORK_FIELDS = 'id,title,image_id,date_display,thumbnail,artist_title,boost_rank,date_end,has_not_been_viewed_much,color,alt_image_ids'
const EXHIBITION_FIELDS = 'id,title,image_id,alt_image_ids,aic_start_at,aic_end_at,status,short_description,image_url'

export const search = async (query, category) => {
    let apiUrl

    if (!(query || query.length) || query.length < 3) {
        if (category === 'Artworks') apiUrl = `https://api.artic.edu/api/v1/artworks?limit=${LIMIT}`
        if (category === 'Exhibitions') apiUrl = `https://api.artic.edu/api/v1/exhibitions?limit=${LIMIT}`
    }
    
    else {
        if (category === 'Exhibitions') apiUrl = `https://api.artic.edu/api/v1/exhibitions/search?q=${query}&limit=${LIMIT}&fields=${EXHIBITION_FIELDS}`
        if (category === 'Artworks') apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}[is_public_domain]=true&limit=${LIMIT}&fields=${ARTWORK_FIELDS}`
    }
    
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`error loading search results: ${response.status}`)
    }

    return response.json();
}

