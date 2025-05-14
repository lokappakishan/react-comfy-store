import { redirect, LoaderFunctionArgs } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosInstance } from '../api';
import { Store } from '@reduxjs/toolkit';

const loader =
  (store: Store) =>
  async ({ request }: LoaderFunctionArgs) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await axiosInstance.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      console.log(response.data.data);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'response' in error &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof (error as any).response === 'object'
      ) {
        const axiosError = error as {
          response: {
            data?: { error?: { message?: string } };
            status?: number;
          };
        };

        const errorMessage =
          axiosError.response?.data?.error?.message ||
          'There was an error accessing your orders';

        toast.error(errorMessage);

        if (
          axiosError.response?.status === 401 ||
          axiosError.response?.status === 403
        ) {
          return redirect('/login');
        }

        return null;
      }

      toast.error('Unexpected error occurred.');
      return null;
    }
  };

export default loader;
