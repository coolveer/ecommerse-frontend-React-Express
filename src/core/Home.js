import React ,{useState, useEffect} from 'react';
import "../styles.css"
import Base from './Base';
import Card from './Card';
import getAllProducts from './helper/coreapicalls'


const Home = () => {

  const [products,setProducts] = useState([])
  const [error,setError] = useState(false)

  const getAll = () => {
    getAllProducts().then(data => {
      console.log(data)
      if (data.error) {
        setError(true)
      } else {
        setProducts(data)
      }
    })
  }

  useEffect(() => {
    getAll()
  },[])

    return (
    <Base title="Home">
      <div className="row text-center">
          {products.map((product,index) => {
            return(
              <div key={index} className="col-md-4 mb-3">
                {console.log(product)}
                <Card product = {product}/>
              </div>
            )
          })}
          
      </div>
      </Base>
    );
  };
export default Home;