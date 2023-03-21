import Image from 'next/image';
import Chip from 'components/chip';
import types from './types';
import Button from 'components/button';

export default function Card({ ticket, jobSeeker, type }) {
  let cardContent;
  if (type === types.JOB_SEEKER)
    cardContent = <JobSeeker jobSeeker={jobSeeker} type={types.JOB_SEEKER} />;

  if (type === types.TICKET) cardContent = <Ticket ticket={ticket} />;

  if (type === types.INTERVIEW)
    cardContent = <JobSeeker jobSeeker={jobSeeker} type={types.INTERVIEW} />;

  return (
    <div className="flex flex-col justify-between cursor-pointer h-[240px] border border-[#CBCBCB] bg-white rounded-[10px] p-5 transition-all hover:shadow-md hover:scale-105">
      {cardContent}
    </div>
  );
}

const JobSeeker = ({ jobSeeker, type }) => {
  let footer;
  if (type === types.JOB_SEEKER)
    footer = (
      <div className="flex flex-row justify-between">
        <Button type="secondary" className="w-[110px] text-sm">
          View profile
        </Button>
        <Button className="w-[110px] text-sm">Interview</Button>
      </div>
    );

  if (type === types.INTERVIEW)
    footer = (
      <Button type="secondary" className="text-sm">
        View profile
      </Button>
    );

  return (
    <>
      <div div className="flex flex-row">
        <Image
          className="inline-block h-12 w-12 rounded-full mr-4"
          src={jobSeeker.profilePic}
          alt={jobSeeker.name}
        />
        <div className="flex flex-col">
          <span className=" text-sm">{jobSeeker.position}</span>
          <p className=" text-xl mt-auto">{jobSeeker.name}</p>
        </div>
      </div>
      <p className="text-sm mt-2">{jobSeeker.content}</p>
      {footer}
    </>
  );
};

const Ticket = ({ ticket }) => (
  <>
    <div>
      <Chip color={ticket.matches ? 'bg-orange' : 'bg-[#D9D9D9]'}>
        {ticket.matches} {ticket.matches == 1 ? 'match' : 'matches'}
      </Chip>
      <h1 className="text-lg mt-3 font-medium">{ticket.title}</h1>
      <p className="text-sm mt-2">{ticket.content}</p>
    </div>
    <p className="text-sm">{ticket.date}</p>
  </>
);
