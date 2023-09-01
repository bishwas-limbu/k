import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import PageNotfound from './pages/PageNotfound';
import Search from './pages/Search';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path = "/products/:id" element = {<ProductDetail />}/>
          <Route path = "/search" element = {<Search />}/>
          <Route path = "*" element = {<PageNotfound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
