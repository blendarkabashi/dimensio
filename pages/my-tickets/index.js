import React from 'react';
import Ticket from 'components/ticket';

export default function index() {
  return (
    <div className="container pt-24">
      <h1 className="text-[37px]">My tickets</h1>
      <div className="flex flex-row mt-7 justify-between flex-wrap">
        {testTickets.map((ticket) => (
          <Ticket ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

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
