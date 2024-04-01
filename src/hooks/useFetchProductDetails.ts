import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProductDetails } from '../interfaces/products-interface';
import { api } from '../api';

const useFetchProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProductDetails | undefined>();
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const itemPromise = api.get(`items/${id}`);
          const itemDescriptionPromise = api.get(`items/${id}/description`);

          const [item, itemDescription] = await Promise.all([itemPromise, itemDescriptionPromise]);

          if (item?.data?.category_id) {
            const response = await api.get(`categories/${item?.data?.category_id}`);
            setBreadcrumbs(response?.data?.path_from_root);
          }

          setProduct({
            title: item?.data?.title,
            description: itemDescription?.data?.plain_text,
            price: item?.data?.price,
            image: item?.data?.pictures[0]?.url,
            sold_quantity: item?.data?.sold_quantity,
          });
        } catch (error) {
          console.error('Erro ao buscar detalhes do produto:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  return { product, breadcrumbs };
};

export default useFetchProductDetails;