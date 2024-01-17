import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/features/shopApi/shopApiSlice";
import { selectedPost } from "../redux/features/home/homeSlice";
const ShopApi = () => {
    const {loading,post,error} = useSelector((state)=>state.shopApi)
    const dispatch = useDispatch();
    
    useEffect(()=>{
     dispatch(fetchData())
    },[])

   

    return (
      <div>
        <h1>All Items</h1>
        <div className="item-container">
          {post.products &&
            post.products.map((item) => (
              <div key={item.id} className="item-card">
                <p className="item-img">
                  <img src={item.thumbnail} />
                </p>
                <p className="item-title">Title : {item.title}</p>
                <p className="item-price">Price : ${item.price}</p>
                <button
                  className="add-btn"
                  onClick={() => dispatch(selectedPost(item))}
                >
                  Add To Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    );
}

export default ShopApi;