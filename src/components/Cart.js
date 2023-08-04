const Cart = ({cartItems}) => {
  return (
    <div>
      <h1> 
        This is your Cart <img src= "https://cdn.vectorstock.com/i/preview-lt/13/57/pink-shopping-cart-semi-flat-color-object-vector-42361357.webp" alt="cart" height= "30px" width= "35px">
      </img>
      </h1>
      <ul>
        <h3>
        {cartItems.map((item) => (
          <li>
            <span class = "itemname">
            {item.name} 
            </span>
            <span Class = "quantity"> - Quantity: </span><span class = "itemquantity">{item.quantity}
            </span>
          </li>
        ))}
        </h3>
      </ul>
    </div>
  );
};


export default Cart;