import { useState } from "react";
import Product from "./product";
import Cart from "./Cart";

function Store(){
  // add a productList, and a function to add products using state
  const [productList, setProductList] = useState([
    {name: "Ear Rings", price: 15.75}, 
    {name: "Bracelets", price: 25.55},
    {name: "Necklaces", price: 75.98},
    {name: "Anklets", price: 25.98}
  ]);
  // function to add new products using the add Product Button
  // const addProduct = (newProduct) =>{
  //   setProductList([...productList, newProduct]);
  // }

  // Add products to product list using handleInputputChange,and handleAddProduct button
  const [newProduct, setNewProduct] = useState ({
    name : "",
    price: ""
  });
    // Adding a cart 
  const [cartItems, setCartItems] = useState ([]);

  //handleChange
  const handleInputChange = (event) => {
    setNewProduct({...newProduct, [event.target.name]: event.target.value
    });
  };

  //handleAddProduct
    const handleAddProduct = () => {
      if (newProduct.name && newProduct.price) {
        setProductList([...productList, {...newProduct}]);
        setNewProduct ({name:"", price: ""});
    }
  };

  //create a remove product function by name
  const handleRemoveProduct = (productName) => {
    setProductList(productList.filter((product) => product.name !== productName))
  };
 // Add to cart
  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((product) => product.name === product);
    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) => item.name === existingProduct.name ? {...item, quantity: item.quantity +1} : item
      );
      setCartItems(updatedCartItems);
    }else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }

  return (
    <div>
      <h1>My Store</h1>
      {/* <button onclick = {() => 
      addProduct({name: "New Product", price: 0})
      }> 
      Add New Product
      </button> */}

      <input 
      type = "text"
      name ="name"
      placeholder="Product Name"
      value = {newProduct.name}
      onChange = {handleInputChange}
      />

      <input
      type = "text"
      name = "price"
      placeholder ="Price"
      value = {newProduct.price}
      onChange = {handleInputChange}
      />

      <button
      onClick = {handleAddProduct}>
       Add New Product
      </button>

      {/* remove button */}
      <button onClick = {()=> handleRemoveProduct(newProduct.name)}>
        Remove Product
      </button>

      <button onClick= {() => handleAddToCart (newProduct)}>
        Add to cart
      </button>


      {productList.map((products)=>(
      <Product
      name={products.name}
      price={products.price}
      />
    ))}
    <div>
      <Cart cartItems = {cartItems}/>
    </div>

    </div>
  );
};
export default Store;