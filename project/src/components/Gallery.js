import '../App.css'
let BASE_IMG_ENDPOINT = '';
let MONTHS = {'01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'}


function ArtworkItem({ result }) {
    let source = `${BASE_IMG_ENDPOINT}/${result.image_id}/full/843,/0/default.jpg`;

    if (result.image_id === null) return;

    

    let color
    if (result.color) {
        color = `hsl(${result.color.h}, ${result.color.s}%, ${result.color.l}%)`
    } else {
        color = 'white'
    }
    const dominantColor = {
        height: '10px',
        width: '10px',
        backgroundColor: `${color}`,
        borderRadius: '50%',
        marginRight: '1.5vh',
        position: 'relative',
        top: '1.5vh'
        
    };


    if (!source) return;

    return (
        <div className='gallery-item'>
            <div className='img-container'>
                <img
                    alt='Exhibition'
                    id={result.image_id}
                    src={source}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://i.postimg.cc/7hDnpvcz/image-not-found-icon.png';
                        e.target.className='default-img'
                    }}
                />
            </div>

            <div className='info-container'>
                <h4 className='prevent-select'>{result.artist_title}</h4>
                <h4 className='prevent-select'>{result.date_display}</h4>
            </div>
            
            <div className='title-container'>
                <h3 className='prevent-select title'>{result.title}</h3>
                <div style={dominantColor}></div>
            </div>
        </div>
    );
}

function convertDate(date) {
    let newDate = date.slice(0, 7).split('-')
    let month, year
    month = MONTHS[newDate[1]]
    year = newDate[0]
    return month + ' ' + year
}

function ExhibitionItem({result}) {
    let source, exhibitionDuration


    if (result.image_id !== null) {
        source = `${BASE_IMG_ENDPOINT}/${result.image_id}/full/843,/0/default.jpg`
    }
    else if (result.image_url !== null) {
        source = result.image_url
    } else {
        return;
    }
    
    if (result.aic_start_at && result.aic_end_at) {
        exhibitionDuration = convertDate(result.aic_start_at) + ' - ' + convertDate(result.aic_end_at)

    }
    return (
        <div className='gallery-item'>
           <div className='img-container'>
                    {<img alt='Artwork' className='prevent-select' id={result.image_id} src={source} onError={
                       (e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://i.postimg.cc/7hDnpvcz/image-not-found-icon.png';
                        e.target.className='default-img'
                    }
                    }></img>}
                </div>

                <div className='info-container'>
                    <h4 className='prevent-select'>{result.status}</h4>
                    <h4 className='prevent-select'>{exhibitionDuration}</h4>
                </div>

                <h3 className='prevent-select'>{result.title}</h3>
        </div>
        
    )

}

export default function Gallery({results, category, order}) {
    
    if (!results || results.length === 0) {
        return null;
    }
    
    BASE_IMG_ENDPOINT = results.config.iiif_url
    
    // sort by date
    if (order === 'Sort: By Date' && category === 'Exhibitions') {
        results.data.sort((a, b) => {
            if (!a.aic_start_at) {
                a.aic_start_at = '9999999999'
            }

            if (!b.aic_start_at) {
                b.aic_start_at = '9999999999'
            }

            return  a.aic_start_at.slice(0,4) - b.aic_start_at.slice(0,4)
        })
    }

    if (order === 'Sort: By Date' && category === 'Artworks') {
        results.data.sort((a, b) => {
            return a.date_end - b.date_end
        })
    }

    // sort by title
    if (order === 'Sort: By Title') {
        results.data.sort((a, b) => {
            let ta = a.title.toLowerCase(),
                tb = b.title.toLowerCase();
        
            if (ta < tb) {
                return -1;
            }
            if (ta > tb) {
                return 1;
            }
            return 0;
        });
        
    }

    return (
        <div className='gallery'>
            
            {
                
                results.data.map(result => {
                const key = `${result.id}-${category}`;
                return category === 'Artworks'? (
                    <ArtworkItem key={key} result={result} />
                ) : (
                    <ExhibitionItem key={key} result={result} />
                );

            })}
        </div>
    );
    
}