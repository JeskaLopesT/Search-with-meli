import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ICategory, IProduct } from "../interfaces/products-interface";
import { api } from "../api";
import { IBreadcrumbItem } from "../interfaces/breadcrumb-interface";

const useFetchProducts = () => {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const q = searchParams.get('q');
          if (q && q !== '') {
            const response = await api.get('/sites/MLB/search', { params: { q } });
            if (response?.data?.filters) {
              const categories = response?.data?.filters.find((f: ICategory) => f.id === 'category');
              if (categories && categories.values.length > 0) {
                setBreadcrumbs(categories.values[0].path_from_root);
              }
            }
            if (response?.data?.results) setProducts(response?.data?.results);
          }
        } catch (error) {
          console.error('Erro ao buscar produtos', error);
        }
      };
      fetchData();
    }, [searchParams]);
  
    return { products, breadcrumbs };
  };
  
  export default useFetchProducts;