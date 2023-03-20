const Button = ({ type, children, className }) => {
  return (
    <button
      className={`${className} p-2 bg-blue text-white rounded-md font-normal`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
