import { forwardRef } from 'react';
import Link from 'next/link';

const CloseExample = forwardRef((ref) => (
  <Link href="/">
    <a
      className="absolute left-0 top-0 only-window my-4 mx-8 py-2 px-4 transition-colors focus:duration-0 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 hover:text-gray-700 active:text-gray-800 text-xs rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-400"
      ref={ref}
    >
      Close example
    </a>
  </Link>
));

export default CloseExample;
