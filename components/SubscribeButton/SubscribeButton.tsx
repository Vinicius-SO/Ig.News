import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubcribeButtonProps {
    priceId: string
}

export function SubscribeButton({ priceId }:SubcribeButtonProps){
    const [session] = useSession();
    function handleSubscribe(){
        if(!session){
            signIn('github')
            return
        }
    }
    return(
        <button
        type="button"
        className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    )
}