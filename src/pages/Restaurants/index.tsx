import { useGetRestaurantsQuery } from '../../services/api'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProdutosLista from "../../components/ProductListRestaurant";


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

const Restaurants = () => {
  const {data: restaurant, isLoading} = useGetRestaurantsQuery ()
  return (
    <>
  <Header/>
  <ProdutosLista  foods={restaurant}  />
  <Footer />
  </>
  )
}



export default Restaurants
