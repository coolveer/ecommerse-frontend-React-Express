import React ,{useState, useEffect} from 'react';
import "../styles.css"
import Base from './Base';
import Card from './Card';
import { loadProducts} from './helper/CartHelper';



const Cart = () => {

  const [products,setProducts] = useState([])
  const [reload,setReload] =useState(false)

  useEffect(() => {
      setProducts(loadProducts())
  },[reload])

  const leftSide = () => {
      return(
          <div>
                {products.map((product,index) => {
                    return(<Card
                        key = {index}
                        product={product}
                        addToCart= {false}
                        removeFromCart = {true}
                        setReload={setReload}
                        reload = {reload}
                        />)
                })}
            </div>
      )
  }

  const rightSide = () => {
    return(
        <h1> this is the checkout side </h1>
    )
}



    return (
    <Base title="Home">
      <div className="row text-center">
          <div className="col-6">
              {leftSide()}
          </div>
          <div className="col-6">
             { rightSide()}
          </div>
          
      </div>
      </Base>
    );
  };
export default Cart;