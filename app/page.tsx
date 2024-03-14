import { IranSans, IranYekan } from '@/config/fonts';
import clsx from 'clsx';
export default function Home() {
  return (
    <>
      <p>استفاده از کنابخانه NextUI در Next.js</p>
      <br />
      <p className={clsx('font-iransans text-2xl', IranSans.variable)}>
        به همراه فونت ایران سنس
      </p>
      <br />
      <p className={clsx('font-iranyekan text-2xl', IranYekan.variable)}>
        و فونت ایران یکان
      </p>
    </>
  );
}
