import { CalendarDays } from 'lucide-react';
import Account from './Account';

const Header = () => {
  return (
    <header className='h-20 border-b-2 border-gray-200'>
      <div className='flex items-center justify-between px-12 py-3'>
        <div
          className={`flex h-12 gap-2 rounded-xl border border-gray-200 p-2 hover:bg-white`}
        >
          <CalendarDays />
          <h1>01 february 2024</h1>
        </div>
        <Account />
      </div>
    </header>
  );
};

export default Header;
