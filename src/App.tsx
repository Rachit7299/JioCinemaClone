import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/header/header'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
