import { CalendarDays } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Select, SelectTrigger } from '@/components/ui/select';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import profileAvatar from '@/icon/profile-avatar.svg';

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
        <Select>
          <SelectTrigger className='w-60'>
            <div className='flex'>
              <Avatar>
                <AvatarImage src={profileAvatar} alt='profile' />
              </Avatar>
              <div className='flex flex-col'>
                <h1>Andika Saputra</h1>
                <p>Staff Admin</p>
              </div>
            </div>
          </SelectTrigger>
        </Select>
      </div>
    </header>
  );
};

export default Header;
