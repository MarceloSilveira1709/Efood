import ProductsList from "../../components/ProductsList";
import Food from "../../models/Food";

import hioki from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import Header from "../../components/Header";




const home: Food [] = [{
  id:1,
  description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  title: 'Hioki Sushi',
  infos: ['Destaque da semana', 'Japonesa'],
  image: hioki,
},
{
  id:2,
  description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  title: 'La Dolce vita Trattoria',
  infos: ['Italiana'],
  image: massa,
},
{
  id:3,
  description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  title: 'La Dolce vita Trattoria',
  infos: ['Italiana'],
  image: massa,
},
{
  id:4,
  description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  title: 'La Dolce vita Trattoria',
  infos: ['Italiana'],
  image: massa,
},
{
  id:5,
  description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  title: 'La Dolce vita Trattoria',
  infos: ['Italiana'],
  image: massa,
},
{
  id:6,
  description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  title: 'La Dolce vita Trattoria',
  infos: ['Italiana'],
  image: massa,
}
]

const Home = () => (
  <>
  <Header/>
  <ProductsList  foods={home} title="Hioki"/>
  </>
)

export default Home
