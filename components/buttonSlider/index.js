const ButtonSlider = ({ buttons, activeButton, setActiveButton }) => {
  return (
    <div className="flex mb-10 border border-[#2081c3] rounded-md">
      {buttons.map((button) => (
        <a
          href="javascript:void(0)"
          onClick={() => setActiveButton(button.id)}
          className={`w-1/2 text-center border-r p-2 ${
            activeButton == button.id ? 'text-white bg-[#2081c3]' : ''
          }`}
        >
          {button.name}
        </a>
      ))}
    </div>
  );
};

export default ButtonSlider;
