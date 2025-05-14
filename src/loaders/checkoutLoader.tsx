import { Store } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const loader = (store: Store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
  return null;
};

export default loader;
