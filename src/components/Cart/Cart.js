import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.title}>
        <span>Carrito de Compras</span>
      </div>
      {cartItems}
      <div className={classes.total}>
        {hasItems ? <span>Subtotal (sin envio):</span> : <span>El carrito de compras esta vacío.</span> }
        {hasItems && <span>{totalAmount}</span> }
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Ver mas productos
        </button>
        {hasItems && <button className={classes.button}>INICIAR COMPRA</button>}
      </div>
    </Modal>
  );
};

export default Cart;
