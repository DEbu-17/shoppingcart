import { useSelector,useDispatch } from "react-redux";

import { deletePost } from "../redux/features/home/homeSlice";
import Checkout from "./CheckOut";

const Cart = (props) => {

   const post = useSelector((state)=>state.home)
   const dispatch = useDispatch();

    return (
      <div className="my-cart">
        <h1>My Cart</h1>

        <div className="container" id="ss">
          {post &&
            post.map((item) => (
              <div key={item.id} className="item-card">
                <p className="item-img">
                  <img src={item.thumbnail} />
                </p>
                <p className="item-title">Title : {item.title}</p>
                <p className="item-price">Price : ${item.price}</p>
                <button
                  className="Delete-btn"
                  onClick={() => dispatch(deletePost(item))}
                >
                  Delete From Cart
                </button>
              </div>
            ))}
        </div>
        {props.clicked && (
          
            <Checkout />
          
        )}
        <div className="price-div">{props.children}</div>
      </div>
    );
}

export default Cart;