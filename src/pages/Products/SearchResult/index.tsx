import { useNavigate } from "react-router-dom";
import { Truck } from "phosphor-react";

import styles from "./search-result.module.scss";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { formatNumber } from "../../../utils/number-utils";
import { IProduct } from "../../../interfaces/products-interface";
import useFetchProducts from "../../../hooks/useFetchProducts";

export default function SearchResult() {
  const navigate = useNavigate();
  const { products, breadcrumbs} = useFetchProducts();

  const handleShowProduct = (id:number) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <div className={styles.container}>
        {products.map((product:IProduct) => (
          <div key={product.id} className={styles.product}>
            <div
              className={styles.product_container}
              onClick={() => handleShowProduct(product.id)}
            >
              <div className={styles.container_img}>
                <img
                  className={styles.product_thumbnail}
                  src={product?.thumbnail}
                  alt={product?.title}
                />
              </div>
              <div className={styles.product_content}>
                <h2 className={styles.product_price}>
                  {formatNumber(product?.price)}{" "}
                  {product?.shipping?.free_shipping && (
                    <span className={styles.product_shipping}>
                      <Truck size={14} />
                    </span>
                  )}
                </h2>
                <p className={styles.product_description}>{product.title}</p>
              </div>
              <div className={styles.product_installments}>
                <span>
                  {product?.installments ? 
                    `Em até ${product?.installments?.quantity}x de ${formatNumber(product?.installments?.amount)}`
                    : "À vista"
                  }
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
