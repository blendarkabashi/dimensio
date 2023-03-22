import UploadIcon from '@mui/icons-material/Upload';
import { useState } from 'react';

const Input = ({ type, label, value, className, placeholder }) => {
  let commonClasses = 'border-darkGray rounded-md w-full border p-2 px-3';
  const currencyInput = () => {
    return (
      <div className={className}>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="">$</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className={`block ${commonClasses} pl-7`}
            placeholder={placeholder ? placeholder : '0.00'}
          />
        </div>
      </div>
    );
  };
  const dateInput = () => {
    return (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${className} ${commonClasses}`}
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
          className={`${className} ${commonClasses}`}
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
        className={`${className} min-h-[120px] ${commonClasses} resize-none`}
      />
    );
  };
  const textInput = () => {
    return (
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${className} ${commonClasses}`}
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
        : type == 'currency'
        ? currencyInput()
        : textInput()}
    </>
  );
};

export default Input;
