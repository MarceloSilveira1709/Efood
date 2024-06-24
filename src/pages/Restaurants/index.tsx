import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProdutosLista from "../../components/ProductListRestaurant";

import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurant = {
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
  const {data: restaurant, isLoading} = useGetRestaurantesQuery ()
  return (
    <>
  <Header/>
  <ProdutosLista  foods={restaurant}  />
  <Footer />
  </>
  )
}



export default Restaurantes
