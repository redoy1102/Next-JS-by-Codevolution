import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-red-500 text-2xl">Code with Redoy</h1>
      <Link href='/products'>Products</Link>
    </div>
  )
}

export default Home;