import { RadioGroup } from '@headlessui/react';

const RadioSelect = ({ options, selectedOption, setSelectedOption, title, fontSize = '16px', margin = '', width = '45%' }) => {
  return (
    <div className={`w-full font-light text-[${fontSize}] ${margin}`}>
      <RadioGroup value={selectedOption} onChange={setSelectedOption}>
        <p className="mb-2">{title}</p>
        <div className="w-full flex justify-evenly items-center text-center">
          {options.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ checked }) =>
                `${checked ? 'bg-[var(--color-green)] text-white' : 'bg-white'}
                 flex rounded-2xl text-[12px] py-1 px-3 shadow-sm focus:outline-none`
              }
              style={{ width }}
            >
              {({ checked }) => (
                <RadioGroup.Label as="p" className={`flex-1 ${checked ? 'text-white' : 'text-[var(--color-dark-gray)]'}`}>
                  {option}
                </RadioGroup.Label>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioSelect;
