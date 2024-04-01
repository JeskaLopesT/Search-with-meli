import styles from "./product-details.module.scss";
import { formatNumber } from "../../../utils/number-utils";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import useFetchProductDetails from "../../../hooks/useFetchProductDetails";

export default function ProductDetails() {
const { product, breadcrumbs} = useFetchProductDetails()
  if (!product) return;

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={product.image} alt="" />
          <div className={styles.description}>
            <h1>Descrição do produto</h1>
            <p>{product.description}</p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info_header}>
            <a href="#">Compartilhar</a>
            <a href="#">Vender um igual</a>
          </div>
          <div className={styles.info_subtitle}>
            <span>Novo - {product.sold_quantity} vendidos</span>
          </div>
          <div className={styles.info_title}>
            <h1>{product.title}</h1>
          </div>
          <div className={styles.info_price}>
            <span>{product?.price ? formatNumber(product.price) : ""}</span>
          </div>
          <div className={styles.warranty}>
            <div>
              <HiOutlineShieldCheck fontSize={50}/>
              <p>
                Compra Garantida, receba o produto que está esperando ou
                devolvemos seu dinheiro.
              </p>
            </div>
          </div>
          <button>Comprar</button>
        </div>
      </div>
    </>
  );
}
