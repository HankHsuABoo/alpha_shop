import minusIcon from "../../../icon/minus.svg"
import plusIcon from "../../../icon/plus.svg"
import styles from "./CartItem.module.css"

export default function CartItem ({product, onChangeAmount}){
  return (
    <div className={styles.productContainer}>
      <img className={styles.imgContainer} src={product.img} alt="product img"/>
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>{product.name}</div>
        <div className={styles.amountController}>
            <button className={styles.adjustButton} >
              <img src={minusIcon} alt="minus icon" onClick={() =>
                {onChangeAmount(product.id, "minus")}
              }/>
            </button>
            <span className={styles.productCount}>{product.quantity}</span>
            <button className={styles.adjustButton} >
              <img src={plusIcon} alt="plus icon" onClick={() =>
                {onChangeAmount(product.id, "plus")}
              }/>
            </button>
        </div>
      </div>
      <div className={styles.productPrice}>${product.price}</div>
    </div>
  )
}