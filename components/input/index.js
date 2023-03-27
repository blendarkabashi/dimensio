import GeneralInput from './components/GeneralInput';
import Currency from './components/Currency';
import Date from './components/Date';
import TextArea from './components/TextArea';
import FileUpload from './components/FileUpload';
import types from './types';

const Input = ({ type, ...props }) => {
  let commonClasses = 'border-darkGray rounded-md w-full border p-2 px-3';
  if (type === types.CURRENCY)
    return <Currency commonClasses={commonClasses} {...props} />;

  if (type === types.FILE)
    return <FileUpload commonClasses={commonClasses} {...props} />;

  if (type === types.DATE)
    return <Date commonClasses={commonClasses} {...props} />;

  if (type === types.TEXT_AREA)
    return <TextArea commonClasses={commonClasses} {...props} />;

  return <GeneralInput type={type} commonClasses={commonClasses} {...props} />;
};

export default Input;
