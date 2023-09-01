
import { useSelector} from 'react-redux';
import NavBar from '../components/NavBar.tsx';
import Cardcomponent from '../components/Cardcomponent';

export default function Search() {
  
  const{searchProduct} = useSelector((state:any) => {
    return state.products;
  });
  return (
    
       <div className='container'>
            <NavBar />
            <h2 className='mt-4' style={{paddingLeft: "3rem"}}>Search Results</h2>
            <div className=' my-5 d-flex  flex-wrap justify-content-evenly'>
              {
                searchProduct.length === 0 ?<h5> product not found</h5> 
                :
                searchProduct && searchProduct !== undefined && 
                  searchProduct.map((prod:any) => {
                      return (
                          <Cardcomponent  key = {prod.id} product = {prod}/>    
                      )
                  })
              }
            </div>
        </div>
    
  )
}
