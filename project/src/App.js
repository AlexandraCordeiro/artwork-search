
import { useState, useEffect } from 'react';
import './App.css';
import TextWrapper from './components/TextWrapper';
import Gallery from './components/Gallery';
import Search from './components/SearchInput';
import Header from './components/Header';
import { search } from './api';




function App() {
  
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null)

  useEffect(() => {
    if (!(query || query.length)) {
      // nothing is typed
      setResults(null);
      return;
    }
  
    if(query.length < 3) {
      // length 3 is not enough to search anything
      return;
    }
  
    search(query).then(results => {
      if (results && results.data) {
        setResults(results)
      } 
    }).catch(error => console.log(error));
  
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search query={query} onChange={(e) => setQuery(e.target.value)}/>
      <TextWrapper />
      <Gallery results={results}/>
    </div>
  );
}


export default App;
