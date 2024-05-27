import { useParams } from "react-router-dom";
function Product() {
 
	const {id}= useParams()
  return (
   
      <p>Id do produto :{id}</p>

  );
}

export default Product;
