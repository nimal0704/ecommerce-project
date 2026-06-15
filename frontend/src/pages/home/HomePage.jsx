import  axios  from 'axios';
import { useEffect, useState } from 'react'
import './HomePage.css'
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid'



export function HomePage({ cart }){
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getHomeData = async () => {
    const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);  
    };
    getHomeData();  
  },[]);

  /*<<   uses promises and .then >>
  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((response) => {
        setProducts(response.data);
      });
  },[]);
  */
 

  return(
    <>
     <title>Ecommerce Project</title>
    
    <Header cart={cart}/>

    <div className="home-page">
      <ProductsGrid products={products}/>
    </div>
  </>
  );
}