import { Select, SelectContent, SelectTrigger } from '@/components/ui/select';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import profileAvatar from '@/icon/profile-avatar.svg';
import { Separator } from '../ui/separator';
import { LogOut, Settings } from 'lucide-react';

const Account = () => {
  const profileData = {
    name: 'Andika Saputra',
    role: 'Staff Admin',
    image: profileAvatar,
  };

  return (
    <Select>
      <SelectTrigger className='h-14 max-w-60 rounded-xl'>
        <div className='flex p-2'>
          <Avatar>
            <AvatarImage src={profileData.image} alt='profile' />
          </Avatar>
          <div className='flex flex-col justify-between pl-3 text-left'>
            <h1 className='font-semibold'>{profileData.name}</h1>
            <p>{profileData.role}</p>
          </div>
        </div>
      </SelectTrigger>
      <SelectContent className='fle-col flex rounded-xl'>
        <div className='flex gap-3 px-4 py-3'>
          <Settings className='size-7 text-default_grey' />
          <h1 className='text-default_grey'>Profile</h1>
        </div>
        <Separator />
        <div className='flex gap-3 px-4 py-3'>
          <LogOut className='size-7 text-destructive' />
          <h1 className='text-destructive'>Logout</h1>
        </div>
      </SelectContent>
    </Select>
  );
};

export default Account;
