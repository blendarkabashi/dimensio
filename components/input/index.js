const Input = ({ type, label, value, className }) => {
  return (
    <>
      <div className="mb-2">{label}</div>
      <input
        type={type}
        value={value}
        className={`${className} border border-[#959595] rounded-md p-2 w-full`}
      />
    </>
  );
};

export default Input;
