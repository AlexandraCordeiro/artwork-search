import '../App.css'
let BASE_IMG_ENDPOINT = '';




function GalleryItem({result}) {

    const source = `${BASE_IMG_ENDPOINT}/${result.image_id}/full/843,/0/default.jpg`

    if (!result.image_id) return;
    /* console.log("source: " + source) */
    if (!source) return;

    return (
        <div className='gallery-item'>
           <div className='img-container'>
                    {<img id={result.image_id} src={source}></img>}
                </div>

                <div className='info-container'>
                    <h4 className='prevent-select'>{result.artist_title}</h4>
                    <h4 className='prevent-select'>{result.date_display}</h4>
                </div>

                <h3 className='prevent-select'>{result.title}</h3>
        </div>
        
    )

}


export default function Gallery({results}) {
    
    
    if (!results || results.length === 0) {
        return null;
    }
    
    BASE_IMG_ENDPOINT = results.config.iiif_url


    return (
        <div className='gallery'>
          {results.data.map(result => {
            return <GalleryItem key={result.image_id} result={result} />;
          })}
        </div>
    );
    
}