import Link from 'next/link'
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';

import { SingInButton } from '../SingInButton/SingInButton';

import styles from './styles.module.scss'

export function Header() {
    const { asPath } = useRouter()

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ActiveLink activeCLassName={styles.active} href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeCLassName={styles.active} href='/posts'>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SingInButton></SingInButton>
            </div>
        </header>
    );
} 