import { Store } from '@reduxjs/toolkit';
import { Form, LoaderFunctionArgs, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';
import { formatPrice } from '../utils';
import { axiosInstance } from '../api';

export const action =
  (store: Store) =>
  async ({ request }: LoaderFunctionArgs) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      await axiosInstance.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (err) {
      if (typeof err === 'object' && err !== null && 'response' in err) {
        const errorMessage =
          // @ts-expect-error - we know this is safe for Axios-style error
          err.response?.data?.error?.message ||
          'there was an error placing your order';
        toast.error(errorMessage);
      } else {
        toast.error('there was an error placing your order');
      }
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
