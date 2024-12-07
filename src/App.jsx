import { useState } from 'react'
import './App.css'
import Home from './components/pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import News from './components/news/News'
import Jamiyat from './components/jamiyat/Jamiyat'
import Sport from './components/sport/Sport'
import Technology from './components/technology/Technology'
import NewsDetail from './components/detail/NewsDetail'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/jamiyat" element={<Jamiyat />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


