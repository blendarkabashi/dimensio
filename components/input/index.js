import UploadIcon from '@mui/icons-material/Upload';

const Input = ({ type, label, value, className, placeholder }) => {
  const dateInput = () => {
    return (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${className} border border-[#959595] rounded-md p-2 w-full`}
      />
    );
  };
  const fileUploadInput = () => {
    return (
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="file"
          placeholder={placeholder}
          value={value}
          className={`${className} border border-[#959595] rounded-md p-2 w-full`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <UploadIcon className="h-5" color="primary" />
        </div>
      </div>
    );
  };
  const textareaInput = () => {
    return (
      <textarea
        value={value}
        placeholder={placeholder}
        className={`${className} min-h-[400px] border border-[#959595] rounded-md p-2 w-full`}
      />
    );
  };
  const textInput = () => {
    return (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${className} border border-[#959595] rounded-md p-2 w-full`}
      />
    );
  };
  return (
    <>
      <div className="mb-2">{label}</div>
      {type == 'textarea'
        ? textareaInput()
        : type == 'file'
        ? fileUploadInput()
        : type == 'date'
        ? dateInput()
        : textInput()}
    </>
  );
};

export default Input;
