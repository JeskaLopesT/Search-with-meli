import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carrossel1 from "../../assets/carrousell-1 (1).jpeg";
import carrossel2 from "../../assets/carrousell-1 (1).jpeg";
import carrossel3 from "../../assets/carrousell-1 (2).jpeg";

import styles from "./home.module.scss";
import { formatNumber } from "../../utils/number-utils";
import { IProduct } from "../../interfaces/products-interface";
import { Truck } from "phosphor-react";
import useFetchInitData from "../../hooks/useFetchInitData";

export function Home() {
  const { products } = useFetchInitData();
  return (
    <div>
      <section>
        <Carousel showArrows={true} showThumbs={false} showStatus={false}>
          <div>
            <img src={carrossel1} alt="Image 1" />
          </div>
          <div>
            <img src={carrossel2} alt="Image 2" />
          </div>
          <div>
            <img src={carrossel3} alt="Image 3" />
          </div>
        </Carousel>
      </section>
      <section>
        <div>
          <div className={styles.container}>
            {products.map((product: IProduct) => (
              <div key={product.id} className={styles.product}>
                <div className={styles.product_container}>
                  <Link to={`/product/${product.id}`}>
                    <div>
                      <img
                        className={styles.product_thumbnail}
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </div>
                    <div className={styles.product_content}>
                      <h2 className={styles.product_price}>
                        {formatNumber(product.price)}{" "}
                        {product?.shipping?.free_shipping && (
                          <span className={styles.product_shipping}>
                            <Truck size={14} />
                          </span>
                        )}
                      </h2>
                      <p className={styles.product_description}>
                        {product.title}
                      </p>
                    </div>
                    <div className={styles.product_installments}>
                      <span>
                        {product?.installments
                          ? `Em até ${
                              product?.installments?.quantity
                            }x de ${formatNumber(
                              product?.installments?.amount
                            )}`
                          : "À vista"}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
