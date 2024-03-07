import { CalendarDays } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

const Header = () => {
  return (
    <header className='h-20 border border-b-2 border-gray-200'>
      <div className='flex items-center justify-between px-12 py-3'>
        <div
          className={`${buttonVariants({ variant: 'ghost' })} flex gap-2 rounded-lg border border-gray-200 hover:bg-white`}
        >
          <CalendarDays />
          <h1>01 february 2024</h1>
        </div>
        <h1>Profile</h1>
      </div>
    </header>
  );
};

export default Header;
