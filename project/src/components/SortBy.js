import {Select, ThemeProvider, defaultTheme} from 'evergreen-ui'
import React from 'react';
import '../App.css'

export default function SortBy({category, onChange}) {
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
        <ThemeProvider theme={newTheme}>
            <Select className='order' value={category} onChange={onChange} width='100%' height='7vh' style={customStyles}>
                <option value="Sort: By Date" selected>
                Sort: By Date
                </option>
                <option value="Sort: By Title">Sort: By Title</option>
                <option value="Sort: Default">Sort: Default</option>
            </Select>
        </ThemeProvider>
    )
}
