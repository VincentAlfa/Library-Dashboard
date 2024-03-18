import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

type tableDataPros = {
  tableHeader: string[];
  bookDatas: {
    judul: string;
    penerbit: string;
    tahun_terbit: number;
  }[];
};

const tableData = ({ tableHeader, bookDatas }: tableDataPros) => {
  return (
    <Table className='bg-white'>
      <TableHeader>
        <TableRow>
          {tableHeader.map((data) => {
            return (
              <TableHead className='text-black' key={data}>
                {data}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookDatas.map((data) => {
          return (
            <TableRow className='text-black' key={data.judul}>
              <TableCell>{data.judul}</TableCell>
              <TableCell>{data.penerbit}</TableCell>
              <TableCell>{data.tahun_terbit}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default tableData;
