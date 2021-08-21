import Sidebar from 'components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-200 flex '>
      <div className='pb-16 pt-6 px-6'>{children}</div>
      <Sidebar />
    </div>
  );
};
export default Layout;
