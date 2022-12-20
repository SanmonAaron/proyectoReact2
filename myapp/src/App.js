import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import StaticContext from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'
import Detail from './pages/Detail'
import {useGifs} from './hooks/useGifs'
import {Link, Route, useLocation} from "wouter"

function App() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {value} = useGifs()
  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/gif/${keyword}`)
  }
  const handleChange = evt => {
    setKeyword(evt.target.value)
  }
  return (
    <StaticContext.Provider value={{}}>
      <div className="App">
      <section className="App-header">
        <h3>Búsqueda</h3>
        <form onSubmit={handleSubmit}>
          <input placeholder="Busca tus gifs..." onChange={handleChange} type="text" value={keyword} />
        </form>
        <br />
        <h3>Últimas búsquedas</h3>
        
        <br />
        <GifsContextProvider>
        <strong><Link to='/'>Limpiar</Link></strong>
        <Route component={Detail} path="/gif/:id" />
        <Route path="/gif/:keyword" component={ListOfGifs} />
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
    
  );
}

export default App;
