
const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + parseInt(item.price), 0);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cart.length === 0 ? <p>No trees added</p> : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(i)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${total}</h4>
    </div>
  );
};

export default Cart;