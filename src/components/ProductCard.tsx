
import { Link } from 'react-router-dom';

export default function ProductCard({productDetail,handleShow}:any) {
  return (
    <div className='mt-5 mx-5 container'>
      <div className='d-flex flex-wrap flex-lg-nowrap'>
          <div>
            <img style ={{ paddingRight:"2rem", paddingTop:"3rem",height:"25rem", width:"20rem"}} src= {productDetail.image} alt = {productDetail.title} /> 
          </div>
          <div className=' mx-4 mt-5 '>
            <div>
                <h2 className='fontProductTitle' style ={{fontSize:"1.8rem"}}>{productDetail.title}</h2>
                <h5 className='mt-5 fontProduct text-danger'>{`${productDetail.price} NPR`}</h5>
                <h4 className = "mt-4 fontProductTitle">Description</h4>
                <p className='fontProduct' style = {{paddingRight:"4rem"}}>{productDetail.description}</p>
              </div>
              <div className=" mt-5 d-flex">
                <div>
                  <Link to = "" 
                      className='bg-warning text-white px-2 py-2' 
                      style = {{textDecoration: "none"}} 
                      onClick={handleShow}
                    > Add to Cart</Link>
                </div>
                <div className='mb-5 mx-2'>
                  <Link to = ""  className='bg-info text-white px-3 py-2' style = {{textDecoration: "none"}}> Buy Now</Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
