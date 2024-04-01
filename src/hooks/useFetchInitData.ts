import { useEffect, useState } from 'react';
import { api } from '../api';
import { IProduct } from '../interfaces/products-interface';

const useFetchInitData = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCellphones = async () => {
      try {
        const response = await api.get('/sites/MLB/search', {
          params: { q: 'celulares', limit: 15 },
        });
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error fetching cellphones:', error);
        setError('Error fetching cellphones');
      }
    };

    fetchCellphones();
  }, []);

  return { products, error };
};

export default useFetchInitData;
