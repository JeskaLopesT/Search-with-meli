export interface IProduct {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    shipping?: {
      free_shipping: boolean;
    };
    installments?: {
      quantity: number;
      amount: number;
    };
  }

  export interface IProductDetails{
    title: string;
    description: string;
    price: number;
    image: string;
    sold_quantity: number;
  }
  
  export interface ICategory {
    id: string;
    values: any[];
    path_from_root?: string[];
  }