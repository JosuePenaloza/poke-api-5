import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import Config from './pages/Config'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'
import PokemonCard from './pages/PokemonCard'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/config' element={<Config />} />
          
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id_name' element={<PokemonCard />} />
          </Route>         
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
