import lookingIllustration from 'public/images/looking-illustration.svg';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState } from 'react';
import ButtonSlider from 'components/buttonSlider';

const index = () => {
  return (
    <div className="my-[80px]">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={logo}></Image>
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-[400px]">
            <div className="text-5xl font-medium mb-3 text-center">
              Create account
            </div>
            <div className="text-darkGray text-xl mb-[50px] text-center">
              Please fill in the inputs to register.
            </div>
            <Input type="text" label="Email" className="mb-5" />
            <Input type="password" label="Password" className="mb-5" />
            <Input type="file" label="Upload File" className="mb-5" />
            <div className="flex items-center justify-end">
              <Button className="px-10" type="submit">
                Next Step
              </Button>
            </div>
          </div>
          <div className="h-[550px] w-[400px]">
            <Image className="h-full w-full" src={lookingIllustration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
