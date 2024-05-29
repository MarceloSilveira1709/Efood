import { useParams } from "react-router-dom"



import Effects from "../../components/Effects"

const Product = () => {
  const {id} = useParams ()

  return (
    <>
    <Effects />
    </>
  )
}


export default Product
