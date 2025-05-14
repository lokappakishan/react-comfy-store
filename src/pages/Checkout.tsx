import { useAppSelector } from '../app/hooks';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';

const Checkout = () => {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal.length === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <div className="max-w-6xl mx-auto px-2">
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </div>
  );
};
export default Checkout;
