// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.removeFromBurger(index)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
