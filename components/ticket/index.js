export default function Ticket({ ticket }) {
  const matchesBgColor = ticket.matches > 0 ? 'bg-[#FF874F]' : 'bg-[#D9D9D9]';
  return (
    <div className="w-[23%] h-[238px] border border-[#CBCBCB] rounded-[10px] p-5 flex flex-col justify-between mb-8">
      <div>
        <span
          className={
            'rounded px-2 py-0.5 text-xs font-medium text-black text-center ' +
            matchesBgColor
          }
        >
          {ticket.matches} {ticket.matches === 1 ? 'match' : 'matches'}
        </span>
        <h1 className="text-lg mt-3">{ticket.title}</h1>
        <p className="text-sm mt-2">{ticket.content}</p>
      </div>
      <p className="text-sm">{ticket.date}</p>
    </div>
  );
}
