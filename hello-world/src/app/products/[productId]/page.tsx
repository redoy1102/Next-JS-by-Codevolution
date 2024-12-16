import {Metadata} from "next";
import { useRouter } from "next/navigation";

type Props = {
    params: {productId: string}
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iphone - ${params.productId}`)
        }, 1000)
    })
    return {
        title: `Product - ${title}`
    }
}

const ProductId = ({params}: Props) => {
    // const router = useRouter();

    // const handlePlaceOrder = () => {
    //     router.push('/order-product');
    // }
    return (
        <div>
            <h1>Product Details of - {params.productId}</h1>

            {/* <button onClick={handlePlaceOrder}>Place order</button> */}
        </div>
    )
}

export default ProductId;