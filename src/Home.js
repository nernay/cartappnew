import axios from "axios";
import React, { useEffect, useState } from "react";
import Itemcard from "./itemcart";
const Home = (props) => {
const [items, setitems] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get")
      .then((res) => {
        setitems(res.data.data);
        console.log(items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
     
      <h1 className="text-center mt-3">All item</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {items.map((item,index) => {
            return (
              <Itemcard
                img={ item.img }
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
