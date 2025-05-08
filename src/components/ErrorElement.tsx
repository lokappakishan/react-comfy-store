import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement: FC = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="max-w-6xl mx-auto p-2">
      <h4 className="font-bold text-4xl">there was an error... </h4>
    </div>
  );
};

export default ErrorElement;
