
import Food from "../../models/Food";

import pizza from '../../assets/images/pizza.png'
import ProductsPerfilList from "../../components/ProductPerfilList";
import HeaderPerfil from "../../components/HeaderPerfil";
import Footer from "../../components/Footer";
import Effects from "../../components/Effects";
import { Modal } from "../../components/Effects/styles";





const perfil: Food [] = [{
  id:1,
  description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  title: 'Pizza Marguerita',
  infos: [''],
  image: pizza,
},
{
  id:2,
  description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  title: 'Pizza Marguerita',
  infos: [''],
  image: pizza,
},
{
  id:3,
  description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  title: 'Pizza Marguerita',
  infos: [''],
  image: pizza,
},
{
  id:4,
  description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  title: 'Pizza Marguerita',
  infos: [''],
  image: pizza,
},
{
  id:5,
  description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  title: 'Pizza Marguerita',
  infos: [''],
  image: pizza,
},
{
  id:6,
  description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  title: 'Pizza Marguerita',
  infos: [''],
  image: pizza,
},



]

const Perfil = () => (
  <>
  <HeaderPerfil/>
  <ProductsPerfilList  foods={perfil} title="Perfil"/>
  <Modal />
  <Footer />
  <Effects/>
  </>
)

export default Perfil
