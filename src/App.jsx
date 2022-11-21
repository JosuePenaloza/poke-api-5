import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Config from './pages/Config'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'
import PokemonCard from './pages/PokemonCard'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/config' element={<Config />} />
          <Route path='/' element={<Login />}/>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id_name' element={<PokemonCard />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
