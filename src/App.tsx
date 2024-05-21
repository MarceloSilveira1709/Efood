import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
    <GlobalCss />
    <div className='container'>
      <RouterProvider router={rotas} />
    </div>
    <Footer />
    </>
  )
}

export default App
