import React ,{ useState,useEffect} from 'react';
import Image from './helper/Image';
import { Redirect } from "react-router-dom";
import { AddItemToCart,removeItemFromCart } from "./helper/CartHelper";


const Card = ({product,addToCart=true,removeFromCart = false,setReload= f => f,reload = undefined}) => {

  const [redirect,setRedirect] = useState(false)
  const [count,setCount] = useState(product.count)


  const cardTitle = product  ? product.name : "a picture from piexels"
  const cardDiscription = product ? product.description : "common discription"
  const cardPrice = product  ? product.price : "common prise"

    const AddToCart = () => {
      AddItemToCart(product,() => { setRedirect(true) })
    }

    const getARedirect = (redirect) => {
      if (redirect) {
        return <Redirect to ="/cart" />
      }
    }

    const showAadToCArt = () => {
        return(
            addToCart && (
                <button
                    onClick={AddToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                  >
                    Add to Cart
                  </button>
            )
        )
    }

    const showRemoveFromCart = () => {
        return(
            removeFromCart && (
                <button
                onClick={() => {
                  removeItemFromCart(product._id);
                  setReload(!reload);
                }
               }
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            )
        )
    }

    return(
        <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitle}</div>
        <div className="card-body">
          <Image product = {product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cardDiscription}
      {getARedirect(redirect)}

          </p>
    <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAadToCArt(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart )}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card;