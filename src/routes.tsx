import {Routes, Route} from 'react-router-dom'
import Cardapios from './pages/Cardapios'
import Restaurantes from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Restaurantes />}/>
    <Route path="/cardapios/:id" element={<Cardapios />} />
  </Routes>
)

export default Rotas
