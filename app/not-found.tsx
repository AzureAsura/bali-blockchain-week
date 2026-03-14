import { Home } from 'lucide-react'; 
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen font-sans text-white overflow-hidden p-6">


      <div className="relative z-10 text-center flex flex-col items-center">

        <div className="relative flex items-center justify-center mb-12">

          <h1 className="text-[14rem] md:text-[22rem] font-extrabold leading-none tracking-tighter text-white/95">
            4<span className="text-orange-600">0</span>4
          </h1>
          <h1 className="absolute text-[14rem] md:text-[22rem] font-extrabold leading-none tracking-tighter text-gray-800 opacity-30 blur-[2px] translate-x-3 translate-y-3">
            4<span className="text-orange-700/60">0</span>4
          </h1>
        </div>


        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
          Whoops! It looks like you're lost.
        </h2>
        <p className="mt-2 text-center text-gray-400 text-lg max-w-xl leading-relaxed">
          The page you are searching for might have been moved, deleted, or never existed in the first place. Don't worry, we can help you find your way back.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-600/30 group"
          >
            <Home size={22} className="group-hover:-translate-y-0.5 transition-transform" />
            Take Me Home
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NotFound;