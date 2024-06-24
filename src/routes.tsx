import {Routes, Route} from 'react-router-dom'
import Cardapios from './pages/Menus'
import Restaurantes from './pages/Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Restaurantes />}/>
    <Route path="/cardapios/:id" element={<Cardapios />} />
  </Routes>
)

export default Rotas
