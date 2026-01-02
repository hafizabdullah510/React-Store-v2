const Orders = () => {
  return (
    <>
      <div className="w-full md:max-w-xl mx-auto">
        <h2 className="text-center text-2xl capitalize">
          This page is only accessible to signed-in users
        </h2>
        <p className="text-center mt-4">
          Authentication is already implemented. Once an orders API is
          connected, the authenticated user’s orders will be fetched and
          displayed here.
        </p>
      </div>
    </>
  );
};
export default Orders;
