import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      ingredients: props.ingredients,
      price: props.price,
      image: props.image,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes["meal-image"]}>
          <img src={props.image} alt='Locro' />
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.ingredients}>{props.ingredients}</div>
        <div className={classes.price}>{price}</div>
      </div>
      
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
      
    </li>
  );
};

export default MealItem;
