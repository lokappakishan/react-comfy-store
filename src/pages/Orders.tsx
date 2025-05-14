import { useLoaderData } from 'react-router-dom';
import { OrdersList, PaginationContainer, SectionTitle } from '../components';

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }
  return (
    <div className="max-w-6xl mx-auto px-2">
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <PaginationContainer />
    </div>
  );
};
export default Orders;
