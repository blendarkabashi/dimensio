import lookingIllustration from 'public/images/looking-illustration.svg';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState } from 'react';
import ButtonSlider from 'components/buttonSlider';
import Dropdown from 'components/dropdown';
import DaysOfWorkSelect from 'components/select/days-of-work';
import ChipSelect from 'components/select/chipSelect';
const index = () => {
  const [techStack, setTechStack] = useState([]);
  const [option, setOption] = useState(0);
  const [selectedDaysOfWork, setSelectedDaysOfWork] = useState([1, 2, 3, 4, 5]);

  const options = [
    {
      id: 0,
      name: 'Small (0-20 workers)',
    },
    {
      id: 1,
      name: 'Medium (20-40 workers)',
    },
    {
      id: 2,
      name: 'Big (40+ workers)',
    },
  ];
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
            <Input
              type="text"
              label="Email"
              className="mb-5"
              placeholder="Frontend Developer"
            />
            <Input type="password" label="Password" className="mb-5" />
            <Input
              type="textarea"
              label="Short Description"
              placeholder="Write your description"
              className="mb-5"
            />
            <Input type="currency" label="Desired Income" className="mb-5" />
            <Dropdown
              label="Choose your option"
              className="mb-5"
              option={option}
              options={options}
              setOption={setOption}
            ></Dropdown>
            <DaysOfWorkSelect
              className="mb-5"
              label="Days of Work"
              selectedDaysOfWork={selectedDaysOfWork}
              setSelectedDaysOfWork={setSelectedDaysOfWork}
            />
            <ChipSelect
              className="mb-5"
              label="Tech stack"
              selectedOptions={techStack}
              setSelectedOptions={setTechStack}
            />
            <Input type="date" label="Founding Date" className="mb-5" />
            <Input
              type="file"
              id="fileupload1"
              label="Upload Document"
              className="mb-5"
            />
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
