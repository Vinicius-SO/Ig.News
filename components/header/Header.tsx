import { SingInButton } from '../SingInButton/SingInButton';
import Link from 'next/link'
import styles from './styles.module.scss'
export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link  href='/'>
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href='/posts' prefetch>
                        <a >Posts</a>
                    </Link>
                </nav>
                <SingInButton></SingInButton>
            </div>
        </header>
    );
} 