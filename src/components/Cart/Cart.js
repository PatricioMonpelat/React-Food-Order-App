import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import TruckIcon from "../Cart/TruckIcon";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let subtotalAmount = cartCtx.totalAmount;
  subtotalAmount = `$${subtotalAmount.toFixed(2)}`;
  
  let envio = 150;
  let totalAmount = cartCtx.totalAmount + envio;
  totalAmount = `$${totalAmount.toFixed(2)}`;
  
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

      <div className={classes.subtotal}>
        {hasItems ? <span>Subtotal (sin envio):</span> : <span>El carrito de compras esta vacío.</span> }
        {hasItems && <span>{subtotalAmount}</span> }
      </div>

      {hasItems &&   
      <div className={classes.envio}>
        <span><TruckIcon/> ¡Genial! tenes envio gratis</span><br></br>
        <span className={classes.cp}><input placeholder="Tu código postal"></input><button>Calcular</button></span><br></br>
        <span className={classes.link}><a href="https://www.correoargentino.com.ar/formularios/cpa" rel="noopener noreferrer" target="_blank">No se mi codigo postal</a></span>
      </div>
      }

      <div className={classes.total}>
        {hasItems && <span>Total:</span> }
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
