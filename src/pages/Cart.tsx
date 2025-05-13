import { useAppDispatch } from '../app/hooks';
import { clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h2>cart</h2>
      <button onClick={handleClearCart}>clearCart</button>
    </div>
  );
};

export default Cart;
