import { Link } from "react-router-dom";
const Home  = () => {
  return(
    <div>
      <h1> This is the sore home page</h1>
      <Link to= "/Store"> Enter Store</Link>
      <Link to= "/Cart">Go to Cart</Link>
    </div>
  )
}

export default Home;