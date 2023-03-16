import hireIllustration from 'public/images/hire-illustration.svg';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState } from 'react';
import ButtonSlider from 'components/buttonSlider';

const index = () => {
  const [isCompany, setIsCompany] = useState(false);
  const [activeButton, setActiveButton] = useState(1);

  const buttons = [
    {
      id: 1,
      name: 'Company',
    },
    { id: 2, name: 'Job Seeker' },
  ];

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
            <ButtonSlider
              buttons={buttons}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            ></ButtonSlider>
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
