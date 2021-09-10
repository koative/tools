import Sidebar from 'components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-200 flex h-screen '>
      <div className='pb-16 pt-6 px-6'>{children}</div>
    <div className="h-screen">
    <Sidebar />
    </div>
    </div>
  );
};
export default Layout;
