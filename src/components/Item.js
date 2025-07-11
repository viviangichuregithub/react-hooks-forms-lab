import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function toggleCartStatus() {
    setIsInCart((prevState) => !prevState);
  }

  const itemClass = isInCart ? "in-cart" : "";
  const buttonClass = isInCart ? "remove" : "add";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={toggleCartStatus}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
