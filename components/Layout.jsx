const Layout = ({ children, categories }) => {
  return (
    <div>
      {/* <header className="bg-white border-b lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40">
        <div className="container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
          2
        </div>
      </header> */}
      <div className="md:mt-24 container mx-auto px-4">
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
