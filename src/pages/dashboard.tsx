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
      text: 'total buku',
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
    <div className='flex h-screen w-full flex-col bg-[#E2E2E2]'>
      <div className='font-abc p-5 text-xl text-muted-foreground'>
        Dashboard
      </div>
      <div className='flex justify-center gap-6 p-5'>
        {cards.map((card) => {
          return (
            <Card className='flex h-32 w-96 items-center' key={card.text}>
              <CardContent className='flex h-full w-full items-center justify-between py-1'>
                <img src={card.icon} alt='' />
                <div className='flex flex-col'>
                  <h1
                    className={cn(
                      'text-end text-6xl font-semibold text-[#0270AF]',
                      {
                        'text-[#FF6B00]': card.text === 'total buku',
                      },
                    )}
                  >
                    {card.manyBooks}
                  </h1>
                  <h1>{card.text}</h1>
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
