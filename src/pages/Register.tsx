import { Form, Link, LoaderFunctionArgs, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosInstance } from '../api/axios';
import { FormInput, SubmitBtn } from '../components';

export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axiosInstance.post('/auth/local/register', data);
    console.log(response);
    toast.success('account created successfully');
    return redirect('/login');
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

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
