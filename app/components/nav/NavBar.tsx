'use client';
import Link from 'next/link';
import styles from './NavBar.module.css'
import { usePathname } from 'next/navigation'
import { map } from 'lodash';

export default function NavBar() {
  const routes = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/work',
      name: 'Work'
    },
    {
      url: '/projects',
      name: 'Projects'
    },
    {
      url: '/contact',
      name: 'Contact'
    }
  ]
  const pathName = usePathname();
  
  return (
    <div className={`${styles.nav_bar}`}>
      {
        map(routes, (route, index)=> {
            return <Link href={route.url} className={pathName === route.url ? `${styles.active_route}` : ''} key={index}>{route.name}</Link>
        })
      }
    </div>
  );
}
