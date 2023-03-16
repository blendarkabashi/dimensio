const Button = ({ type, children, className }) => {
  return (
    <button
      className={`${className} p-2 bg-[#2081c3] text-white w-full rounded-md font-normal`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
