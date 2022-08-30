import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import locro from '../../assets/locro.jpg';
import goulash from '../../assets/goulash.jpeg';
import pollo from '../../assets/pollo.jpeg';
import mondongo from '../../assets/mondongo.jpg';
import carne from '../../assets/carne.jpg';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Locro Criollo",
    description: "An Argentinan specialty! ",
    ingredients: "Ingredients: Squash, corn, beans, meat, red chorizo.",
    price: 150,
    image: locro
  },
  {
    id: "m2",
    name: "Meat Goulash",
    description: "A Hungarian specialty!",
    ingredients: "Ingredients: Rice, Meat, Onion, Paprika.",
    price: 160,
    image: carne
  },
  {
    id: "m3",
    name: "Chicken Casserole",
    description: "American, raw, meaty",
    ingredients: "Ingredients: Chicken Meat, Rice, Onions, Curry.",
    price: 170,
    image: pollo
  },
  {
    id: "m4",
    name: "Guiso de Mondongo",
    description:  "An Argentina specialty! ",
    ingredients: "Ingredients: Mondongo, Onion, Garlic and more.",
    price: 130,
    image: mondongo
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      description={meal.description}
      ingredients={meal.ingredients}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
 

    <section className={classes.meals}>
   
        <Card><ul>{mealsList}</ul></Card>
   
    </section>

  );
};

export default AvailableMeals;
