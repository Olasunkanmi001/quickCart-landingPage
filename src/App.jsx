import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/header'
import Hero from './component/hero'
import Marketplace from './component/marketPlace'

export default function App() {
  return (
   <div>

    <Header/>
    <Hero/>
    <Marketplace/>




   </div>
  
  )
}