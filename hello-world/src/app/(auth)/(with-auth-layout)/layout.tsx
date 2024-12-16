'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {name: 'login', href: '/login'},
    {name: 'register', href: '/register'},
]

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();

    return(
        <div>
            <div className="flex justify-evenly bg-slate-900 p-4 hover:underline">
                {navLinks.map(nav => {
                        const isActive = pathname.startsWith(nav.href)
                        
                        return (
                            <Link 
                                href={nav.href} 
                                key={nav.href}
                                className={isActive ? 'text-red-600 font-bold' : ''}
                            >{nav.name}</Link>
                        )
                    }
                    )
                }
            </div>
            {children}
        </div>
    )
}

export default AuthLayout;