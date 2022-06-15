import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement
    activeCLassName: string
}

export function ActiveLink({children,activeCLassName, ...rest}:ActiveLinkProps){
    const { asPath } = useRouter()

    const className = asPath === rest.href ? activeCLassName:'';
    return(
        <Link {...rest}>
            {cloneElement(children, {
                className
            })}
        </Link>
    )
}