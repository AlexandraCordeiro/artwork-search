import {SearchInput} from 'evergreen-ui'
import '../App.css'

export default function Search({query, onChange}) {
    const customStyles = {
        borderBottom: '1.5px solid black',
        borderRadius: '0',
        fontSize: '16px',
        boxShadow: 'none',
      };
      
    return (
        <div className='search-input'>
            <SearchInput
                placeholder='Search for artworks'
                width='100%'
                height='7vh'
                value={query}
                onChange={onChange}
                style={customStyles}
            />
        </div>
    )
}