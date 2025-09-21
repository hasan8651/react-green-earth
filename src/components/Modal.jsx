
const Modal = ({ plant, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>❌</button>
        <img src={plant.image} alt={plant.name} />
        <h2>{plant.name}</h2>
        <p>{plant.description}</p>
        <p><b>Category:</b> {plant.category}</p>
        <p><b>Price:</b> ${plant.price}</p>
      </div>
    </div>










// <!-- Modal Section -->
// <dialog id="my_modal_5" class="modal modal-bottom md:modal-middle">
//   <div class="modal-box">    
//   <div id="details-container"></div>
//   <div class="modal-action">
//   <form method="dialog">
//   <button class="btn bg-[#CFF0DC] hover:bg-[#15803D] hover:text-white">Close</button>
//   </form>
//   </div>
//   </div>
//   </dialog>
//   </main>








  );
};

export default Modal;