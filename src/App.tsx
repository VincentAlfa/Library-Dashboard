import Sidebar from '@/components/sidebar/sidebar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import BookDatas from './pages/book-data';
import Header from '@/components/header/header';

function App() {
  return (
    <>
      <div className='flex h-screen w-full font-inter'>
        <Sidebar />
        <div className='flex w-full flex-col'>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to={'/dashboard'} replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/databuku' element={<BookDatas />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
