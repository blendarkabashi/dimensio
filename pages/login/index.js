import hireIllustration from 'public/images/hire-illustration.svg';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState } from 'react';

const index = () => {
  const [isCompany, setIsCompany] = useState(false);
  return (
    <div className="my-[80px]">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={logo}></Image>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-5xl font-medium mb-3 text-center">
              Welcome back!
            </div>
            <div className="text-[#959595] text-xl mb-[50px] text-center">
              Please enter your details to log in.
            </div>
            <div className="flex mb-10 border border-[#2081c3] rounded-md">
              <a
                href="#"
                onClick={() => setIsCompany(true)}
                className={`w-1/2 text-center border-r p-2 ${
                  isCompany ? 'text-white bg-[#2081c3]' : ''
                }`}
              >
                Company
              </a>
              <a
                onClick={() => setIsCompany(false)}
                href="#"
                className={`w-1/2 text-center p-2 ${
                  !isCompany ? 'text-white bg-[#2081c3]' : ''
                }`}
              >
                Job Seeker
              </a>
            </div>
            <Input type="text" label="Email" className="mb-8" />
            <Input type="password" label="Password" className="mb-3" />
            <div className="text-right mb-8">
              <a href="#">Forgot Password?</a>
            </div>
            <Button type="submit">Log In</Button>
          </div>
          <div>
            <Image src={hireIllustration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
