import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Checkout from "./CheckOut";

const Price = (props) => {
  let post = useSelector((state) => state.home);

  const [add, setAdd] = useState(0);
 

  useEffect(() => {
    // Calculate the total price when the 'post' state changes
    if (post && post.length >= 0) {
      const totalPrice = post.reduce((total, item) => total + item.price, 0);
      setAdd(totalPrice);
    } 
  }, [post]);

  function checkOut(){
     document.getElementById("ss").innerHTML = "";
     document.getElementById("body").innerHTML = "";
     props.setClicked(true);
  }

  return (
    <table className="price-cart">
      <thead>
        <tr>
          <th colSpan="2">
            <h2>Checkout</h2>
          </th>
        </tr>
      </thead>
      <tbody id="body">
        {post &&
          post.map((item, index) => (
            <tr key={index}>
              <td className="td">{item.title}</td>

              <td className="td2">${item.price}</td>
            </tr>
          ))}
        <hr />
        <tr>
          <td className="td">Total</td>
          <td className="td2">${add}</td>
        </tr>
        {/* <tr>
            <td className="td3"></td>
        </tr> */}
      </tbody>
      <button className="btn" onClick={checkOut}>
        Checkout
      </button>
      
    </table>
  );
};

export default Price;
