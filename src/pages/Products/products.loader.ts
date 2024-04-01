import { defer, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { productsList } from "../../services/endpoints/products";

export const productsLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  const term = url.searchParams.get("term");

  const queryParams = {
    term: term,
  };

  const products = productsList({ params: queryParams });
  return defer({ products });
};
/* 
export const productLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params
  const product = getProduct(id as string)
  return defer({ product })
} */


export const useProductsListLoader = () => {
    return useLoaderData() as any
  }
  
