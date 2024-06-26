// src/components/BurgerStack.jsx
const BurgerStack = ({ ingredients, removeFromBurger }) => {

  return (
    <ul>
      {ingredients.length > 0 ? (
        ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        ))
      ) : (
        <li>No Ingredients</li>
      )}
    </ul>
  );
};

export default BurgerStack;
