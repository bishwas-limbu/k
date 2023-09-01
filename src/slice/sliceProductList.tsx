import {createSlice} from '@reduxjs/toolkit'
import { ProductListInterface } from '../interface/globalInterface'

// interface ProductListInterface{
//     productList : Array<object>
// }
const initialState: ProductListInterface = {
    productList: [],
    searchProduct :[],
    showAddModal: false,

};

const productSlice = createSlice({
    name: 'productList',
    initialState,
    reducers:{
        setProductList: (state,productData)=>{
            state.productList = productData.payload;
        },
        setSearchProduct:(state,productData)=>{
            state.searchProduct = productData.payload;
        },
        insertNewProduct:(state,newProduct) => {
            state.productList.unshift(newProduct.payload);
            state.showAddModal = false;
        },
        setShowAddModal:(state,status) => {
            state.showAddModal = status.payload;
        }

    }
});
export const {setProductList,setSearchProduct, insertNewProduct,setShowAddModal} = productSlice.actions;
export default productSlice.reducer;