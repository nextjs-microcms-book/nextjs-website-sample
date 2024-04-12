import Image from 'next/image';
import styles from './index.module.css';
import { formatDate } from '@/app/_libs/utils';

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      {formatDate(date)}
    </span>
  );
}
