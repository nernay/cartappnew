import React from "react";
import { useCart } from "react-use-cart";
import "./Home.css";
//function we get from 
const Itemcard = (props) => {
 const{ addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card">
        <img src = {props.img} className="card-img-top sampleImg" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Price $ {props.price}</p>
          <p className="card-text">{props.desc}</p>
          <button className="btn btn-primary" onClick={()=>addItem(props.item)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default Itemcard;
