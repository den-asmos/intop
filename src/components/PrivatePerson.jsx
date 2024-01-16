import { emailIcon, lockIcon } from '../assets';
import { Switch } from '@headlessui/react';

const PrivatePerson = ({ fields, handleFieldsChange, rememberMe, setRememberMe }) => {
  return (
    <div className="w-[98%]">
      <p className="mt-2 mb-10 text-[var(--color-dark-gray)] text-[10px] text-center">Введите вашу электронную почту и пароль </p>
      <div className="w-full relative">
        <label htmlFor="email" className="mb-2 w-full text-[10px] self-start">
          Электронная почта
        </label>
        <div>
          <img src={emailIcon} alt="email icon" className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2" />
          <input
            id="email"
            type="email"
            data-name="email"
            className="mb-5 w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg py-3 px-8 focus:outline-none text-[11px] text-[var(--color-dark-gray)]"
            value={fields.email}
            onChange={handleFieldsChange}
            required={true}
          />
        </div>
      </div>

      <div className="w-full relative">
        <label htmlFor="password" className="mb-2 w-full text-[10px] self-start">
          Пароль
        </label>
        <div>
          <img src={lockIcon} alt="lock icon" className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2" />
          <input
            id="password"
            type="password"
            data-name="password"
            className="mb-5 w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg py-3 px-8 focus:outline-none text-[11px] text-[var(--color-dark-gray)]"
            value={fields.password}
            onChange={handleFieldsChange}
            required={true}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Switch
          checked={rememberMe}
          onChange={setRememberMe}
          className={`${rememberMe ? 'bg-[var(--color-green)]' : 'bg-[var(--color-dark-gray)]'}
          relative inline-flex h-[10px] w-[20px] shrink-0 rounded-full border-3 border-transparent transition-colors duration-200 ease-in-out`}
        >
          <span
            aria-hidden="true"
            className={`${rememberMe ? 'translate-x-[10px]' : 'translate-x-0'}
            pointer-events-none inline-block h-[10px] w-[10px] transform rounded-full bg-white broder-2 shadow-lg transition duration-200 ease-in-out`}
          />
        </Switch>
        <p className="text-[10px]">Запомнить меня</p>
      </div>
    </div>
  );
};

export default PrivatePerson;
