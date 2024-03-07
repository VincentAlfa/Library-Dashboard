import { Link } from 'react-router-dom';
import NavLink from './nav-link';

const Sidebar = () => {
  return (
    <div className='left-0 h-full w-56 border border-r-2 border-gray-200'>
      <Link to={'/dashboard'} className='mx-6 my-2 flex flex-col px-2 text-3xl'>
        <h1 className='text font-inknut_antiqua text-[#078AE9]'>Dwipurna</h1>
        <h1 className='text-end font-jolly_lodger text-[#FF6B00]'>Library</h1>
      </Link>
      <h1 className='pl-7 pt-5 text-default_grey '>MENU UTAMA</h1>
      <NavLink />
    </div>
  );
};

export default Sidebar;
