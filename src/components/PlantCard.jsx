import { useState } from "react";
import Modal from "./Modal";


const PlantCard = ({ plant, addToCart }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" border-2 border-b-indigo-800 m-2 rounded-xl px-2 py-4">
        <img className="w-50 h-50 object-cover mx-auto mt-2 rounded-2xl" src={plant.image} alt={plant.name} />
        <h3 className="mb-2 " onClick={() => setOpen(true)}>{plant.name}</h3>
        <p>{plant.short_description}</p>
        <span className=" mr-6">{plant.category}</span>
        <strong>${plant.price}</strong>
        <br />
        <button className="border-2 border-fuchsia-600 p-3 font-bold" onClick={() => addToCart(plant)}>Add to Cart</button>
      </div>
      {open && <Modal plant={plant} onClose={() => setOpen(false)} />}
    </>
  );
};

export default PlantCard;