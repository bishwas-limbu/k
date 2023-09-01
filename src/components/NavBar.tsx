import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom';
import { setSearchProduct } from '../slice/sliceProductList';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const NavBar = () => {
    const  dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");

    const{productList} = useSelector((state:any) => {
        return state.products;
    });

    const handleSearchClick = () => {
      console.log(searchQuery); 
      if(searchQuery ){
          const filterProduct = productList.filter((product:any) => {
            return product.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase());
          })
          dispatch(setSearchProduct(filterProduct));
          navigate("/search");

      }else{
        alert("Please, enter Something inside search bar to search product.")
      }
    }
    const handleSearchBar = (e:any) => {
        let query = e.target.value
        setSearchQuery(query);
    }
    
    const handleKeyDown= (e:any) => {
      console.log(searchQuery); 
      if(searchQuery ){
        if(e.key === "Enter"){
          const filterProduct = productList.filter((product:any) => {
            return product.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase());
          })
          dispatch(setSearchProduct(filterProduct));
          navigate("/search");
        }
      }
    }

    return(
      <>
          <div className='my-4'>
            <h3 className='text-center titleFont' style={{paddingLeft: "1.5rem", margin:"auto"}}>Online Store</h3> 
          </div>
          <nav className=" mx-4 navbar navbar-light bd-highlight justify-space-between">
            <div className=' mx-5 mb-2'>
              <Link to = "/" className="navbar-brand ">Home</Link>
              <Link to =""  className="navbar-brand" style ={{paddingLeft:"2rem"}}><AiOutlineShoppingCart size = {20}/></Link>
            </div>
          <div className=' mx-5 d-flex flex-grow-1 bd-highlight'>
            <input 
              className="form-control rounded shadow-none w-60" 
              type="search" 
              placeholder="Search your product here" 
              onKeyDown={handleKeyDown}
              onChange={handleSearchBar}
            />
            <div className='px-2'>
            <button className="btn btn-outline-success" onClick={handleSearchClick}>Search</button>
            </div>
          </div>
        </nav>
      
      </>

    );
}
export default NavBar;