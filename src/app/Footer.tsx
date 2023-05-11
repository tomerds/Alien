// import Image from 'next/image';
// import AlienLogo from '@public/logos/AlienWordmark.png';

export default function Footer() {
  return (
    <footer className="bg-black ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            {/* <Image
              className="h-10 mr-3 w-auto"
              priority
              src={AlienLogo}
              alt="Alien"
            /> */}
          </div>

          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Built with love by 👽's from outer space.
          </span>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Alien Studios™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
