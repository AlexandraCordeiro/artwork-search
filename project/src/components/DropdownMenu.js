import {Select, ThemeProvider, defaultTheme} from 'evergreen-ui'
import React from 'react';
import '../App.css'

export default function DropdownMenu({category, onChange}) {

    const newTheme = {
        ...defaultTheme,
        components: {
            
            Select: {
                base: {
                    __focus: 'none',
                    borderRadius: 'none'
                    
                },
            },
        },
    };


      
    const customStyles = {
        borderBottom: '1.5px solid black',
        borderRight: '1.5px solid black',
    };

    return (
        <ThemeProvider value={newTheme}>
            <Select className='filter' value={category} onChange={onChange} width='100%' height='7vh' style={customStyles}>
                <option value="Artworks" selected>
                    Artworks
                </option>
                <option value="Exhibitions">Exhibitions</option>
            </Select>
        </ThemeProvider>
    )
}
