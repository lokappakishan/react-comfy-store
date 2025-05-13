import {
  Form,
  Link,
  LoaderFunctionArgs,
  redirect,
  useNavigate,
} from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { axiosInstance } from '../api';
import { Store } from '@reduxjs/toolkit';
import { useAppDispatch } from '../app/hooks';

export const action =
  (store: Store) =>
  async ({ request }: LoaderFunctionArgs) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await axiosInstance.post('/auth/local', data);

      store.dispatch(loginUser(response.data));
      toast.success('logged in successfully');
      return redirect('/');
    } catch (err) {
      if (typeof err === 'object' && err !== null && 'response' in err) {
        const errorMessage =
          // @ts-expect-error - we know this is safe for Axios-style error
          err.response?.data?.error?.message ||
          'Something went wrong. Please try again.';
        toast.error(errorMessage);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
      return null;
    }
  };

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await axiosInstance.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error.please try later.');
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
