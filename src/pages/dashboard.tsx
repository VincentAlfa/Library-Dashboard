import { bookDatas } from '@/data/book-datas';
import totalBooksIcon from '@/icon/total_books.svg';
import gramediaIcon from '@/icon/gramedia.svg';
import togamasIcon from '@/icon/togamas.svg';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const totalBooks = bookDatas.length;

  const gramedia = bookDatas.filter(
    (data) => data.penerbit === 'Gramedia',
  ).length;

  const togamas = bookDatas.filter(
    (data) => data.penerbit === 'Togamas',
  ).length;

  const cards = [
    {
      manyBooks: totalBooks,
      text: 'Total Buku',
      icon: totalBooksIcon,
    },
    {
      manyBooks: gramedia,
      text: 'Buku Gramedia',
      icon: gramediaIcon,
    },
    {
      manyBooks: togamas,
      text: 'Buku Togamas',
      icon: togamasIcon,
    },
  ];

  return (
    <div className='flex h-screen w-full flex-col items-start gap-5 p-10'>
      <h1 className=' text-xl font-semibold text-[#666262]'>Dashboard</h1>
      <div className='flex justify-center gap-6'>
        {cards.map((card) => {
          return (
            <Card
              className='flex h-24 w-80 items-center shadow-md'
              key={card.text}
            >
              <CardContent className='flex h-full w-full items-center justify-between py-1 '>
                <img className='h-16 w-16' src={card.icon} alt='' />
                <div className='flex flex-col text-end'>
                  <h1
                    className={cn(' text-5xl font-semibold text-[#0270AF]', {
                      'text-[#FF6B00]': card.text === 'Total Buku',
                    })}
                  >
                    {card.manyBooks}
                  </h1>
                  <h1 className='text-[#666262]'>{card.text}</h1>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
