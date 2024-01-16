import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const TabSelect = ({ options, setSelectedOption, title, fontSize = '16px', margin = '' }) => {
  return (
    <div className={`w-full text-[14px] font-light text-[${fontSize}] ${margin}`}>
      <p className="mb-2 w-full self-start">{title}</p>
      <Tab.Group className="w-full">
        <Tab.List className="flex space-x-1 rounded-2xl bg-[var(--color-gray)] p-1">
          {options.map((option) => (
            <Tab
              key={option}
              onClick={() => setSelectedOption(option)}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-2xl py-2 leading-3 text-[12px]',
                  'white focus:outline-none',
                  selected ? 'bg-[var(--color-green)] text-white shadow' : 'text-[var(--color-dark-gray)]'
                )
              }
            >
              {option}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default TabSelect;
