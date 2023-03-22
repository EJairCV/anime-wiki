import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AnimePage from './components/anime/AnimePage';
import AnimeInfo from './components/anime/AnimeInfo';
import NavBar from "./components/general/NavBar"
import Search from './components/general/Search';

import './App.css'
import Container from 'react-bootstrap/Container';
import Recomend from './components/anime/Recomend';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
    <BrowserRouter>
    <NavBar></NavBar>
    <Container>
      <Routes>
        <Route path='/' element={<Recomend></Recomend>} />
        <Route path='/animes' element={<AnimePage/>} />
        <Route path='/search/:busqueda' element={<Search/>}></Route>
        <Route path='aniinfo/:id' element={<AnimeInfo></AnimeInfo>}></Route>
        <Route path='*' element={<h1>Error url regresa al inicio</h1>} />
      </Routes>
    </Container>
      
      
    </BrowserRouter>
    </>
    
  )
}

export default App
