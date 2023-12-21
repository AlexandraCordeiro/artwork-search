import { useState, useEffect } from 'react';
import './App.css';
import TextWrapper from './components/TextWrapper';
import Gallery from './components/Gallery';
import Search from './components/SearchInput';
import { search } from './api';
import DropdownMenu from './components/DropdownMenu';
import SortBy from './components/SortBy';


function App() {
  
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("");
  const [category, setCategory] = useState("Artworks");
  const [results, setResults] = useState(null)




  useEffect(() => {
    
    search(query, category).then(results => {
      if (results && results.data) {
        setResults(results)
      } 
    }).catch(error => console.log(error));
  
  })


  return (
    <div className="container">
      <div className='search-and-filter'>
        <Search query={query} onChange={(e) => setQuery(e.target.value)}/>
        <DropdownMenu category={category} onChange={(e) => setCategory(e.target.value)}/>
        <SortBy category={order} onChange={(e) => setOrder(e.target.value)}/>
      </div>
      <TextWrapper />
      <Gallery results={results} category={category} order={order}/>
    </div>
  );
}


export default App;
