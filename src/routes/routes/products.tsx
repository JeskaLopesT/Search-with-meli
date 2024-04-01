import ProductDetails from "../../pages/Products/ProductDetails";
import SearchResult from "../../pages/Products/SearchResult";

import { productsLoader } from "../../pages/Products/products.loader";

export const products =[
    {
        path: 'products',
        element:(
            <SearchResult />
        ), 
        loader: productsLoader,
        shouldRevalidate : ()=>{
            return true
        }
    },
    {
        path: 'products/:id',
        element:(
            <ProductDetails />
        ),

    }
]