import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from './slice/sliceProductList'
const store = configureStore({
    reducer: {
        products:ProductReducer, 
    },
});
export default store;