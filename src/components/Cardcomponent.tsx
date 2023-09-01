
import '../App.css';
import {useState,useEffect} from 'react';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import Button from 'react-bootstrap/Button';


 export default function Cardcomponent({product,handleDeletePro,editProduct}:any) {

    const[isloading, setIsLoading] = useState(true);

 
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        },1000);
    },[]);
  return ( 
     <>
        {  isloading ?
                <div className="card rounded border border-white hoverEffect mb-4" style={{width: "17rem"}}>
                    <SkeletonTheme>
                        <Skeleton height = {200}  duration = {2} />
                    </SkeletonTheme>
                </div>
            :
            <Link to ={`/products/${product.id}`} style = {{textDecoration: "none"}} >
                <div className="card rounded border-2 border-indigo-600 hoverEffect   mb-5 pt-3 px-3" style={{width: "17rem"}}>
                    <img className="card-img-top" style={{height: "9rem"}}src={product.image?product.image:""} alt={product.title} />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize: "1.2rem"}}>{product.title.length > 21 ? product.title.slice(0,16)+"..":product.title }</h5>
                        <p className="card-text text-secondary">{`${product.price} NPR`}</p>
                    </div>
                    <div className = 'd-flex justify-content-between align-items-center px-4 pb-3'>

                        <Button variant="primary" className = "px-4"onClick = {(e) => editProduct(e,product)}>Edit</Button>
                        <Button className = "ms-1" variant="danger"  onClick = {(e) =>handleDeletePro(e,product.id)}>Delete</Button>
                    </div>


                </div>
            </Link>
       }
     </>

    
  )
}

