import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className='p-6 sticky top-0 bg-white shadow-lg  w-80 flex-shrink-0'>
      <Link href='/'>Go Home</Link>
      <Link href='/sample'>Go Sample</Link>
    </aside>
  );
};

export default Sidebar;
