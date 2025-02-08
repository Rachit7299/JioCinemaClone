import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Display from './pages/display'
import Header from './components/header/header'
import { useState } from 'react';

function App() {
  const [searchInput,setSearchInput] = useState("");
  const [activeLink,setActiveLink] = useState("Home");

  return (
    <>
    <BrowserRouter>     
      <Header setactiveLink={setActiveLink}></Header>
      <Routes>
            <Route path="/" element={<Display currentPage={activeLink} />} />
          <Route path="/tv-shows" element={<Display currentPage={activeLink} />} />
          <Route path="/movies" element={<Display currentPage={activeLink} />} />
          <Route path="/kids" element={<Display currentPage={activeLink} />} />
          <Route path="/sports" element={<Display currentPage={activeLink} />} />
          <Route path="/more" element={<Display currentPage={activeLink} />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
