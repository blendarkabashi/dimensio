import Chip from 'components/chip';
const ChipSelect = ({
  className,
  label,
  selectedOptions,
  setSelectedOptions,
  removeChip,
}) => {
  const handleAddChip = (event) => {
    if (event.key == 'Enter' && event.target.value.length) {
      setSelectedOptions((prevState) => [...prevState, event.target.value]);
      event.target.value = '';
    }
  };
  return (
    <div className={`${className} cursor-text`}>
      {label && <div className="mb-2">{label}</div>}
      <div
        onClick={() => document.querySelector('.tags-input').focus()}
        className={`border-darkGray rounded-md w-full border p-2 px-3 bg-white py-2 min-h-[40px] outline-none focus:ring-1 focus:ring-blue1 focus:border-blue1`}
      >
        {selectedOptions.map((selection, index) => (
          <Chip
            color="bg-blue"
            key={index}
            className="text-white"
            closable
            removeChip={removeChip}
          >
            {selection}
          </Chip>
        ))}
        <input
          className="tags-input border-none outline-none h-full focus:ring-transparent focus:border-none font-[14px] max-w-[175px] p-0"
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
