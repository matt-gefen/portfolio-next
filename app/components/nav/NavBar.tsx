'use client';
import Link from 'next/link';
import styles from './NavBar.module.css'
import { usePathname } from 'next/navigation'
import { map } from 'lodash';
import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';

export default function NavBar() {
  const routes = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/experience',
      name: 'Experience'
    },
    {
      url: '/projects',
      name: 'Projects'
    },
  ]
  const pathName = usePathname();

  return (
    <div className={`${styles.nav_bar}`}>
      <div className={`${styles.nav_bar_links}`}>
        {
          map(routes, (route, index) => {
            return <Link href={route.url} className={pathName === route.url ? `${styles.active_route}` : ''} key={index}>{route.name}</Link>
          })
        }
      </div>
      {
        pathName !== '/' && (
          <div className={`${styles.social_links}`}>
            <Link href={'https://github.com/matt-gefen'} target="_blank" className={`${styles.social_link}`}>
              <Github />
            </Link>
            <Link href={'https://www.linkedin.com/in/mattgefen/'} target="_blank" className={`${styles.social_link}`}>
              <LinkedIn />
            </Link>
            {/* <Link href={'mailto: matt.gefen@gmail.com'} target="_blank" className={`${styles.social_link}`}>
                  <Mail/>
                </Link> */}
          </div>
        )
      }

    </div>
  );
}
