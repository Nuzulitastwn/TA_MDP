import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import BotNav from './components/BotNav'
import GunungBerapi from './pages/GunungBerapi'
import TipeGunungBerapi from './pages/TipeGunungBerapi'
import GunungBerapiDetail from './pages/GunungBerapiDetail'
import TipeDetail from './pages/TipeDetail'
import About from './pages/About'

const history = new createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <header>
        <h1>Muncak Kuy</h1>
      </header>
      <div className="app">
        <Routes>
          <Route path="/" element={<GunungBerapi />} />
          <Route path="/:namaGunung" element={<GunungBerapiDetail />} />
          <Route path="/tipe" element={<TipeGunungBerapi />} />
          <Route path="/tipe/:namaTipe" element={<TipeDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <BotNav />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
