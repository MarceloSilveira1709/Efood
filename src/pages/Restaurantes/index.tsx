import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import ProdutosLista from "../../components/ProdutosListaRestaurante";

import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  image: string
}


const Restaurantes = () => {
  const {data: restaurante, isLoading} = useGetRestaurantesQuery ()

  return (
    <>
  <Header/>
  <ProdutosLista  foods={restaurante} title="Restaurantes"/>
  <Footer />
  </>
  )
}



export default Restaurantes
