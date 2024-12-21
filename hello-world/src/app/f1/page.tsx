import Link from 'next/link';

const F1Page = () => {
    return (
        <div className='text-center'>
            <h1 className='mb-4 text-4xl'>F1 Page</h1>
            <Link className='bg-slate-600 text-white p-2 font-bold rounded-sm hover:underline hover:bg-slate-900' href='f1/f2'>Visit F2 Page</Link>
        </div>
    );
};

export default F1Page;
