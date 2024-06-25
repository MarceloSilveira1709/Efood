import { useGetRestaurantsQuery } from '../../services/api'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProdutosLista from "../../components/ProductListRestaurant";

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
