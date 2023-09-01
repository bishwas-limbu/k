import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';
import { useEffect, useState } from 'react';
import { fetchData } from '../services/api.services';
import '../App.css';
import 'react-loading-skeleton/dist/skeleton.css'

import CartModel from '../components/CartModal';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const [productDetail,setProductDetail] = useState<object>({});
 
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const {id} = useParams();

  useEffect(() => {
    fetchData(`products/${id}`).then((data) => {
      if(data){
        setProductDetail(data);
      }
    })
  },[]);

  return (
      <> 
         
         { productDetail && productDetail !== undefined &&
            <div className='container'>
               <NavBar />
               <ProductCard 
                productDetail = {productDetail}
                handleShow = {handleShow} 
                />
            </div>
            
          }
           <CartModel 
            show = {show}
            handleClose = {handleClose}
           />
          
      </>
  )
}
