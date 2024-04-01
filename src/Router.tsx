import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';

import SearchResult from './pages/Products/SearchResult';
import ProductDetails from './pages/Products/ProductDetails';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<SearchResult />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
      </Route>
    </Routes>
  )
}
