import React from 'react';
import Image from 'next/image';
import Ticket from 'components/ticket';
import Button from 'components/button';
import NoTicketsIcon from 'public/images/no-tickets.svg';

export default function index() {
  if (testTickets.length === 0) return <NoTickets />;
  return (
    <div className="container pt-24">
      <h1 className="text-[37px]">My tickets</h1>
      <div className="flex flex-row mt-7 flex-wrap [&>*:nth-child(4n)]:mr-0">
        {testTickets.map((ticket) => (
          <Ticket ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

const NoTickets = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center pt-24">
      <h1 className="text-[37px]">You currently have no tickets</h1>
      <Button className="mt-7 px-8">Create ticket</Button>
      <Image className="mt-20" src={NoTicketsIcon} />
    </div>
  );
};
const testTickets1 = [];
const testTickets = [
  {
    title: 'Ticket 1',
    content:
      'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
    date: '12.02.2022',
    matches: 3,
  },
  {
    title: 'Ticket 12',
    content:
      'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
    date: '12.02.2022',
    matches: 2,
  },
  {
    title: 'Ticket 3',
    content:
      'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
    date: '12.02.2022',
    matches: 0,
  },
  {
    title: 'Ticket 4',
    content:
      'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
    date: '12.02.2022',
    matches: 1,
  },
  {
    title: 'Ticket 5',
    content:
      'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
    date: '12.02.2022',
    matches: 0,
  },
  {
    title: 'Ticket 6',
    content:
      'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
    date: '12.02.2022',
    matches: 5,
  },
  {
    title: 'Ticket 7',
    content:
      'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
    date: '12.02.2022',
    matches: 2,
  },
  {
    title: 'Ticket 8',
    content:
      'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
    date: '12.02.2022',
    matches: 0,
  },
];
