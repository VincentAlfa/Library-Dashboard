import { Select, SelectTrigger } from '@/components/ui/select';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import profileAvatar from '@/icon/profile-avatar.svg';

const Account = () => {
  return (
    <Select>
      <SelectTrigger className='h-14 w-60 rounded-lg'>
        <div className='flex p-2'>
          <Avatar>
            <AvatarImage src={profileAvatar} alt='profile' />
          </Avatar>
          <div className='flex flex-col justify-between pl-3 text-left'>
            <h1 className='font-semibold'>Andika Saputra</h1>
            <p>Staff Admin</p>
          </div>
        </div>
      </SelectTrigger>
    </Select>
  );
};

export default Account;
