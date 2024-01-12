/* eslint-disable react/prop-types */
import'./Bottles.css'
const Bottle = ({ bottle, handlepurchesBtn }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>bottle:{name}</h3>
      <img src={img} alt="" />
      <h3>price{price}</h3>
      <button onClick={()=>handlepurchesBtn(bottle)}>purchues</button>
    </div>
  );
};

export default Bottle;