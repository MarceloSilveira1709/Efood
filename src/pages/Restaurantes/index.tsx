import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProdutosLista from "../../components/ProdutosListaRestaurante";

import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurante = {
    id: number;
    titulo: string;
    tipo: string;
    capa: string;
    descricao: string;
    avaliacao: number;
    destacado: boolean;
    image: string;
  };

const Restaurantes = () => {
  const {data: restaurante, isLoading} = useGetRestaurantesQuery ()
  return (
    <>
  <Header/>
  <ProdutosLista  foods={restaurante}  />
  <Footer />
  </>
  )
}



export default Restaurantes
