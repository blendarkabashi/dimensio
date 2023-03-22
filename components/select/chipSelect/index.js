import Chip from 'components/chip';
const ChipSelect = ({
  className,
  label,
  selectedOptions,
  setSelectedOptions,
}) => {
  const handleAddChip = (event) => {
    if (event.key == 'Enter' && event.target.value.length) {
      if (!selectedOptions.includes(event.target.value)) {
        setSelectedOptions((prevState) => [...prevState, event.target.value]);
        setTimeout(() => {
          event.target.value = '';
        }, 1);
      }
    }
  };
  const removeChip = (chipToRemove) => {
    setSelectedOptions(selectedOptions.filter((chip) => chip !== chipToRemove));
  };
  return (
    <div className={`${className} cursor-text`}>
      {label && <div className="mb-2">{label}</div>}
      <div
        onClick={() => document.querySelector('.tags-input').focus()}
        className={`flex flex-wrap items-center border-darkGray rounded-md w-full border px-3 bg-white py-0 min-h-[40px] outline-none `}
      >
        {selectedOptions.map((selection, index) => (
          <Chip
            color="bg-blue"
            key={index}
            className="text-white mr-1 my-1 text-base"
            closable
            removeChip={removeChip}
          >
            {selection}
          </Chip>
        ))}
        <input
          className="tags-input border-none outline-none h-full focus:ring-transparent focus:border-none max-w-[175px] p-0"
          type="text"
          placeholder="Add technology stack..."
          onKeyDown={(event) => handleAddChip(event)}
          // onInput={onInput}
          // onChange={onChange}
          // onKeyDown={onKeyDown}
          // value={value}
        />
      </div>
    </div>
  );
};

export default ChipSelect;
