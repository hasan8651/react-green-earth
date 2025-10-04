import { useState } from "react";
import Modal from "./Modal";


const PlantCard = ({ plant, addToCart }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
    
      <div className="m-2 rounded-xl px-2 py-3 shadow-md bg-white">
            {/* <h3 class="card-title">${plant.name}</h3> */}
        <h3 className="mb-2 font-semibold" onClick={() => setOpen(true)}>{plant.name}</h3>
        <img className="w-full h-60 object-cover rounded-xl p-2" src={plant.image} alt={plant.name} />
        <span className="">Category: {plant.category}</span>
        <strong className="font-semibold my-2">Price: ৳${plant.price}</strong>
        <br />
        <p className="">Description: <span class="text-sm opacity-80 my-2"> {plant.description}</span></p>
        <button className="btn w-full rounded-full p-3 bg-[#15803D] text-white" onClick={() => addToCart(plant)}>Add to Cart</button>
      </div>
      {open && <Modal plant={plant} onClose={() => setOpen(false)} />}
    </>
  );
};

export default PlantCard;