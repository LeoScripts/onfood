import Link from 'next/link';
import Image from 'next/image';
import Styles from './header.module.css';
import { IconBookmark, IconHome } from '@/icons';


export function Header() {
  return (
    <header>
      <nav className={Styles.nav}>
        <div className={Styles.brand}>
          <Link href="/">
            <a>
              <Image src="/images/logo.png" width={36} height={26} alt="OnFood" />
              <span>OnFood</span>
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>
                <IconHome />
                Home</a>
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}