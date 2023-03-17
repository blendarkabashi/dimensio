import React from 'react';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { items } from './list';

export default function Header() {
  return (
    <header>
      <nav className="bg-white  py-4 border-b-[1px] border-[#CBCBCB]">
        <div className="flex flex-wrap justify-between items-center mx-[246px]">
          <Link href={'/'} className="flex flex-row items-center">
            <Image src={logo} className="mr-3 h-6 sm:h-9" alt="dimensio logo" />
            <p>Dimensio</p>
          </Link>
          <div className="flex flex-row items-center lg:order-2">
            <Link
              href={'/new-ticket'}
              className="text-white bg-[#2081c3] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-[30px]"
            >
              <AddIcon className="mr-2" />
              New ticket
            </Link>
            <div class="rounded-full border-[1px] border-[#2081c3] w-[45px] h-[45px]"></div>
          </div>
          <div className="justify-between text-base items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-[40px] lg:mt-0">
              {items.map((item) => (
                <li>
                  <Link
                    href={item.link}
                    className="block  text-black hover:text-[#2081c3]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
