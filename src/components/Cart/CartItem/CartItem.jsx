import minusIcon from "../../../icon/minus.svg"
import plusIcon from "../../../icon/plus.svg"
import styles from "./CartItem.module.css"

export default function CartItem ({product, onMinusAmount, onPlusAmount}){
  return (
    <div className={styles.productContainer}>
      <img className={styles.imgContainer} src={product.img} alt="product img"/>
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>{product.name}</div>
        <div className={styles.amountController}>
            <button className={styles.adjustButton} >
              <img src={minusIcon} alt="minus icon" onClick={() =>
                {onMinusAmount(product.id)}
              }/>
            </button>
            <span className={styles.productCount}>{product.quantity}</span>
            <button className={styles.adjustButton} >
              <img src={plusIcon} alt="plus icon" onClick={() =>
                {onPlusAmount(product.id)}
              }/>
            </button>
        </div>
      </div>
      <div className={styles.productPrice}>${product.price}</div>
    </div>
  )
}