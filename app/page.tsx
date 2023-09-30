import Link from 'next/link';
import Button from '@/components/ui/Button';
import { loadFakeData } from '@/lib/load-fake-data';

const Home = () => {
  loadFakeData();

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-md'>
        <h1 className='text-center my-4'>Strings</h1>
        <div className='flex flex-col gap-4'>
          <Link
            href='/signin'
            className='block'
          >
            <Button
              btnLabel='Sign in'
              className='w-full'
            />
          </Link>

          <Link
            href='/signup'
            className='block'
          >
            <Button
              btnLabel='Sign up'
              className='w-full'
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
