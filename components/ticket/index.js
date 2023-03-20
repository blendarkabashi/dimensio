import Chip from 'components/chip';
export default function Ticket({ ticket }) {
  return (
    <div className="h-[240px] border border-[#CBCBCB] rounded-[10px] p-5">
      <div>
        <Chip color={ticket.matches ? 'bg-[#FF874F]' : 'bg-[#D9D9D9]'}>
          {ticket.matches} {ticket.matches == 1 ? 'match' : 'matches'}
        </Chip>
        <h1 className="text-lg mt-3">{ticket.title}</h1>
        <p className="text-sm mt-2">{ticket.content}</p>
      </div>
      <p className="text-sm">{ticket.date}</p>
    </div>
  );
}
