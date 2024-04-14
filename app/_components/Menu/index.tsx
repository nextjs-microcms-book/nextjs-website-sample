'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <div>
      <nav className={styles.nav} id='navigation' aria-hidden={!isOpen}>
        <ul className={styles.items}>
          <li>
            <Link href='/news'>ニュース</Link>
          </li>
          <li>
            <Link href='/members'>メンバー</Link>
          </li>
          <li>
            <Link href='/contact'>お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <button
        type='button'
        aria-controls='navigation'
        aria-expanded={isOpen}
        className={styles.button}
        onClick={toggle}
      >
        {isOpen ? (
          <Image src='/close.svg' alt='閉じる' width={24} height={24} />
        ) : (
          <Image src='/menu.svg' alt='メニュー' width={24} height={24} />
        )}
      </button>
    </div>
  );
}
