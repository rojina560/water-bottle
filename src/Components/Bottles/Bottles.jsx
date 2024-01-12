import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import'./Bottle.css'
import { adddLS, getStoredCart } from "../../Utilies/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch("bottle.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);
  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      const saveCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id)
        if (bottle) {
          saveCart.push(bottle)
        }
      }
      console.log(saveCart)
      setCart(saveCart)
   }
   
  },[bottles])
    const handlepurchesBtn = (bottle) => {
        const newCart = [...cart, bottle];
      setCart(newCart)
      adddLS(bottle.id)
    }
    
    return (
      <div>
            <h2>bottles here:{bottles.length}</h2>
            <Cart cart ={cart}></Cart>
        <div className="bottle-container">
          {bottles.map((bottle) => (
              <Bottle key={bottle.id} bottle={bottle}
              handlepurchesBtn={handlepurchesBtn}></Bottle>
          ))}
        </div>
      </div>
    );
};

export default Bottles;