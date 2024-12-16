'use client'

import { useRouter } from "next/navigation";



const Page = () => {
    const router = useRouter();

    const handleConfirmOrderButton = () => {
        console.log('Clicked')
        router.push('/')
    }

    return (
        <div>
            <h1>Order confirm</h1>
            <button onClick={handleConfirmOrderButton}>Confirm order</button>
        </div>
    );
};

export default Page;