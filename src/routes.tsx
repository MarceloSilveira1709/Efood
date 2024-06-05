import {Routes, Route} from 'react-router-dom'
import Product from './pages/Product'
import Cardapios from './pages/Cardapios'
import Restaurantes from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Restaurantes />}/>
    <Route path="cardapios" element={<Cardapios />}/>
    <Route path="product/:id" element={<Product />}/>
  </Routes>
)

export default Rotas
