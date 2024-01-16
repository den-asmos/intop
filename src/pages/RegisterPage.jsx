import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CustomButton, ArrowButton, TabSelect } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { chevronIcon, uzbekistanFlag, russiaFlag, belarusFlag } from '../assets';

const countries = [
  {
    code: '+998',
    flagIcon: uzbekistanFlag,
  },
  {
    code: '+7',
    flagIcon: russiaFlag,
  },
  {
    code: '+375',
    flagIcon: belarusFlag,
  },
];

const RegisterPage = () => {
  const [roles] = useState(['Физ. лицо', 'Юр. лицо']);
  const [selectedRole, setSelectedRole] = useState('Физ. лицо');
  const [selectedCode, setSelectedCode] = useState(countries[0]);
  const [phone, setsetPhone] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = ({ target }) => {
    setsetPhone(target.value);
  };

  const handleSumbmit = () => {
    navigate(`/verify/${selectedCode.code}${phone}`);
  };

  return (
    <div className="bg-white w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center">
        <Link to="/">
          <ArrowButton styles="absolute top-6 left-2 border-none rotate-180 shadow-none" />
        </Link>
        <h2 className="mb-5 text-[24px] font-light self-center">Зарегистрироваться</h2>
      </div>

      <TabSelect options={roles} setSelectedOption={setSelectedRole} fontSize="14px" />

      <div className="w-[98%] text-[var(--color-dark-gray)]">
        <p className="mt-2 mb-10 text-[var(--color-dark-gray)] text-[10px] text-center">Введите ваш номер телефона</p>

        <div className="w-full relative">
          <label htmlFor="phone number" className="mb-2 w-full text-[10px] self-start">
            Номер телефона
          </label>
          <input
            id="phone number"
            type="tel"
            className="w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg p-3 pl-[110px] focus:outline-[var(--color-light)]"
            value={phone}
            onChange={handlePhoneChange}
            required={true}
            data-name="phone"
          />

          <div className="absolute bottom-1 left-0 text-[12px] w-[110px]">
            <Listbox value={selectedCode} onChange={setSelectedCode}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none">
                  <div className="w-full flex justify-start items-center gap-2">
                    <img src={selectedCode.flagIcon} alt={`${selectedCode.code} icon`} width={10} />
                    <span className="text-base block truncate">{selectedCode.code}</span>
                  </div>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <img src={chevronIcon} alt="chevron icon" height={5} width={5} />
                  </span>
                </Listbox.Button>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {countries.map((country) => (
                      <Listbox.Option
                        key={country.code}
                        onChange={() => setSelectedCode(country)}
                        className={({ active }) => `relative select-none p-2 ${active ? 'bg-[var(--color-light)]' : 'text-gray-900'}`}
                        value={country}
                      >
                        <div className="w-full flex justify-start items-center gap-2">
                          <img src={country.flagIcon} alt={`${country.code} icon`} width={10} />
                          <span className="block truncate">{country.code}</span>
                        </div>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
      <CustomButton disabled={!phone} onClick={handleSumbmit} styles="mt-10 p-3 w-[80%] bg-[var(--color-green)] text-white text-[14px] rounded-xl">
        Регистрация
      </CustomButton>
    </div>
  );
};

export default RegisterPage;
