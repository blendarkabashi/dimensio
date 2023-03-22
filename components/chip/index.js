const Chip = ({ color, children, className }) => {
  return (
    <span
      className={`${className} rounded px-2 py-0.5 text-xs font-medium text-center ${color} ${
        color == 'bg-[#D9D9D9]' ? 'text-black' : 'text-white'
      }`}
    >
      {children}
    </span>
  );
};

export default Chip;
