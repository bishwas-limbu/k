import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/NavBar.tsx";
import Cardcomponent from "../components/Cardcomponent";
import { fetchData } from "../services/api.services.tsx";

import { setProductList,insertNewProduct,setShowAddModal } from "../slice/sliceProductList.tsx";

import EditModal from "../components/EditModal.tsx";
import AddModal from "../components/Addmodal.tsx";

import "../App.css";




export default function Home() {

  const [editProd, setEditProd] = useState<{  id: number,
    title: string,
    description: string,
    price:number,
    image: string,}>({  id:0,title:"",description:"",  price:0, image:"", });

  // for  Edit Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  // for Add Modal

const handleAddModalClose = () => {dispatch(setShowAddModal(false));};
const [addProduct,setAddProduct] = useState({});

  const dispatch = useDispatch();

  const { productList,showAddModal} = useSelector((state: any) => {
    return state.products;
  });

  const getData = () => {
    fetchData("products").then((data) => {
      if (data) {
        dispatch(setProductList(data));
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);
  
  //For Delete product
  const handleDeletePro = (e: any, id: any) => {
    e.preventDefault();
    //console.log(id);
    const filterProduct = productList.filter((prod: any) => {
      return prod.id !== id;
    });
    dispatch(setProductList(filterProduct));
  };


  //For Edit product
  const editProduct = (e: any, product: any) => {
    e.preventDefault();
    console.log(product);
    setEditProd(product);
    setShow(true);
  };
  const handleChange = (e: any) => {
    console.log(e.target.value);
    let updatedData = {
      ...editProd,
      [e.target.name]: e.target.value,
    };
    setEditProd(updatedData);
  };

  const handleEditChanges = () => {
    
    const{id} = editProd;
    console.log(id);
    const updated = productList.map((item: any) => {
      return item.id === editProd.id ? editProd : item;
    });
    // console.log(updated);
    dispatch(setProductList(updated));

    setShow(false);
  };

  //For Add Product
  const handleAddModalShow = (e:any) => {
    e.preventDefault();
    dispatch(setShowAddModal(true));
   }

   const handleAddChange = (e:any) => {
    e.preventDefault();
    let newProd = {
     id : Math.random(),
     ...addProduct,
     [e.target.name]: e.target.value,
     
   };
   setAddProduct(newProd);
   console.log(newProd);
   console.log(addProduct);

}

const handleSubmit = () => {
  console.log(addProduct);
  dispatch(insertNewProduct (addProduct));
}

  return (
    <div className="container">
      <NavBar />
      <h2 className="mt-4" style={{ paddingLeft: "3rem" }}>
        All Products
      </h2>
      <button className="btn btn-secondary ms-5" onClick = {handleAddModalShow}>Add Product</button>
      <div className=" my-5 d-flex  flex-wrap justify-content-evenly">
        {productList &&
          productList !== undefined &&
          productList.map((prod: any) => {
            return (
              <Cardcomponent
                key={prod.id}
                product={prod}
                handleDeletePro={handleDeletePro}
                editProduct={editProduct}
              />
            );
          })}
      </div>
      <EditModal
        show={show}
        handleClose={handleClose}
        product={editProd}
        handleChange={handleChange}
        handleEditChanges={handleEditChanges}
      />
      <AddModal
        show={showAddModal}
        handleAddModalClose={handleAddModalClose}
        handleAddChange={handleAddChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
