import dashboardIcon from '@/icon/people.svg';
import dashboardIconActive from '@/icon/people_active.svg';
import bookDataIcon from '@/icon/receipt-text.svg';
import bookDataIconActive from '@/icon/receipt-text_active.svg';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const NavLink = () => {
  const location = useLocation();
  const links = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      image: {
        default: dashboardIcon,
        active: dashboardIconActive,
      },
    },
    {
      name: 'Data Buku',
      href: '/databuku',
      image: {
        default: bookDataIcon,
        active: bookDataIconActive,
      },
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <div
            key={link.name}
            className={cn('my-4 flex flex-col p-5 text-sm text-default_grey', {
              'bg-[#d5f0ff] text-[#0270AF]': location.pathname === link.href,
            })}
          >
            <Link to={link.href}>
              <div
                className='flex cursor-pointer items-center gap-3'
                key={link.name}
              >
                <img
                  src={
                    location.pathname === link.href
                      ? link.image.active
                      : link.image.default
                  }
                  alt=''
                />
                <h1>{link.name}</h1>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default NavLink;
