import { useAppSelector } from '../app/hooks';
import { cartProduct } from '../types/product';
import CartItem from './CartItem';

const CartItemsList = () => {
  const cartItems: cartProduct[] = useAppSelector(
    (state) => state.cartState.cartItems
  );

  return (
    <div>
      {cartItems.map((item: cartProduct) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  );
};

export default CartItemsList;
