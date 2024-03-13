import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';
export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth='xl'
      position='sticky'
      className='bg-primary-50 shadow-lg rounded-b-xl'
    >
      <NavbarContent className=' basis-1/5 sm:basis-full' justify='start'>
        <ul className='hidden lg:flex gap-4 justify-end mr-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink passHref href={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium'
                  )}
                  color='foreground'
                >
                  {item.label}
                </Link>
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent className='justify-end sm:justify-end' justify='end'>
        <NavbarItem>
          <NextLink href='/emergency' passHref>
            <Button color='danger'>درخواست امداد فوری</Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href='#'
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
