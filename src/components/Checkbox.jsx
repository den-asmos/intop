import { Switch } from '@headlessui/react';

const Checkbox = ({ value, onValueChange, title, fontSize = '16px', margin = '' }) => {
  return (
    <div className={`w-full flex justify-start items-center gap-2 font-light text-[${fontSize}] ${margin}`}>
      <Switch
        checked={value}
        onChange={onValueChange}
        className={`${
          value ? 'bg-[var(--color-green)]' : 'bg-[var(--color-dark-gray)]'
        } relative inline-flex h-[10px] w-[20px] shrink-0 rounded-full border-3 border-transparent transition-colors duration-200 ease-in-out`}
      >
        <span
          aria-hidden="true"
          className={`${
            value ? 'translate-x-[10px]' : 'translate-x-0'
          } inline-block h-[10px] w-[10px] transform rounded-full bg-white broder-2 shadow-lg transition duration-200 ease-in-out`}
        />
      </Switch>
      <p>{title}</p>
    </div>
  );
};

export default Checkbox;
