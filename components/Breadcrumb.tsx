import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = () => {
  return (
    <nav className="bg-gray-100 py-1.5">
      <div className="max-w-[1512px] mx-auto px-1 flex items-center text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <IoIosArrowForward className="mx-2 text-sm" />
        <span className="text-gray-500">TVs</span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
