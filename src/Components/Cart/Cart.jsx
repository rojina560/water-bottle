/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import'./cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h4>cart:{cart.length}</h4>
            <div className="cart-container">
                {
                    cart.map(bottle=><img src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;