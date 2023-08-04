function Product (props){
  return (
    <div>
      <h3><u>
        {props.name}</u></h3>
      <p>
        <span class="price_color">Price: </span> 
        <span Class= "cash_symbol">$</span>{props.price}</p>
    </div>
  );
};
export default Product;