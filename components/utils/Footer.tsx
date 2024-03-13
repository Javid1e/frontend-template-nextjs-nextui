import { HeartFilledIcon } from '@/components/utils/icons'; // Assuming you have an SVG component
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex bg-primary-200 shadow-xxl rounded-t-xl text-right p-10 w-full  items-center justify-center py-3 '>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div>
          <div className='flex items-center'>
            <span> راه یار</span>
            <HeartFilledIcon className='fill-current text-red-600 ml-2 w-6 h-6' />
            <span>همراه شما</span>
          </div>
        </div>
        <div>
          <h4>شبکه های اجتماعی:</h4>
          <ul>
            <li>
              <Link href='https://instagram.com'>
                <p>اینستاگرام</p>
              </Link>
            </li>
            <li>
              <Link href='https://telegram.org'>
                <p>تلگرام</p>
              </Link>
            </li>
            <li>
              <Link href='https://whatsapp.com'>
                <p>واتساپ</p>
              </Link>
            </li>
            <li>
              <Link href='https://rubika.ir'>
                <p>روبیکا</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
