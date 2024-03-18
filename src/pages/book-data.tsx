import TableData from '@/components/table/table-data';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { bookDatas } from '@/data/book-datas';
import { PlusSquare } from 'lucide-react';

const BookDatas = () => {
  const tableHeader = ['Judul Buku', 'penerbit', 'Tahun Terbit', 'Aksi'];

  return (
    <div className='flex h-screen w-full flex-col items-start gap-5 p-8'>
      <div className=' flex w-full items-center justify-between'>
        <h1 className=' text-xl font-semibold text-[#666262]'>Data Buku</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='gap-3 rounded-xl bg-[#0270AF] pr-6'>
              <PlusSquare />
              Tambah Buku
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle className='text-center'>
                Tambah Data Buku
              </DialogTitle>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Nama Buku
                </Label>
                <Input
                  id='name'
                  defaultValue='Pedro Duarte'
                  className='col-span-3'
                  required
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='username' className='text-right'>
                  Penerbit
                </Label>
                <Input
                  id='username'
                  defaultValue='@peduarte'
                  className='col-span-3'
                  required
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='username' className='text-right'>
                  Tahun Terbit
                </Label>
                <Input
                  id='username'
                  defaultValue='@peduarte'
                  className='col-span-3'
                  required
                />
              </div>
            </div>
            <DialogFooter className='gap-2'>
              <DialogClose asChild>
                <Button
                  type='button'
                  variant='ghost'
                  className='text-[#FF6B00]'
                >
                  Batalkan
                </Button>
              </DialogClose>
              <Button
                className='bg-default_grey hover:bg-[#0270AF]'
                type='submit'
              >
                Tambah
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <TableData tableHeader={tableHeader} bookDatas={bookDatas} />
    </div>
  );
};

export default BookDatas;
