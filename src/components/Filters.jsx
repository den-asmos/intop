import { useState, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { closeIcon, filterIcon } from '../assets';
import CustomButton from './CustomButton';
import Checkbox from './Checkbox';
import TabSelect from './TabSelect';
import RadioSelect from './RadioSelect';

const Filters = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort] = useState(['Сначала дешевле', 'Сначала дороже']);
  const [sortingOption, setSortingOption] = useState('');
  const [currency] = useState(['UZS', 'USD']);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [typesOfSale] = useState(['Рассрочка', 'Опт', 'Розница']);
  const [selectedTypeOfSale, setSelectedTypeOfSale] = useState('');
  const [conditions] = useState(['Новый', 'Б/У']);
  const [selectedCondition, setSelectedCondition] = useState('');
  const [sellers] = useState(['Верифицированный', 'Не верифицированный']);
  const [selectedSeller, setSelectedSeller] = useState('');
  const [productsNearby, setProductsNearby] = useState(false);
  const [bidding, setBidding] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <CustomButton styles="py-1 px-2 flex justify-between items-center gap-2 bg-black text-white text-[12px] self-start" onClick={openModal}>
        <img src={filterIcon} alt="filter icon" width={20} height={20} />
        {language.Filter}
      </CustomButton>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-linear duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="ease-out duration-200 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-full h-screen transform overflow-hidden rounded-t-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-center">
                    {language.Filter}
                  </Dialog.Title>

                  <div className="flex flex-col justify-center items-start mt-4 font-light gap-6">
                    <RadioSelect options={sort} selectedOption={sortingOption} setSelectedOption={setSortingOption} title="Сортировать" />

                    <Checkbox value={productsNearby} onValueChange={setProductsNearby} title="Товары рядом" />

                    <Checkbox value={bidding} onValueChange={setBidding} title="Возможен торг" />

                    <RadioSelect options={currency} selectedOption={selectedCurrency} setSelectedOption={setSelectedCurrency} title="Валюта" />

                    <RadioSelect
                      options={typesOfSale}
                      selectedOption={selectedTypeOfSale}
                      setSelectedOption={setSelectedTypeOfSale}
                      title="Тип продажи"
                      width="25%"
                    />

                    <RadioSelect options={conditions} selectedOption={selectedCondition} setSelectedOption={setSelectedCondition} title="Состояние" />

                    <RadioSelect options={sellers} selectedOption={selectedSeller} setSelectedOption={setSelectedSeller} title="Продавец" />
                  </div>

                  <div className="mt-8 w-full flex justify-center gap-2">
                    <CustomButton styles="mt-5 p-3 w-[80%] bg-white text-[14px] ring-1 ring-[var(--color-light-gray)] rounded-[30px] shadow-sm">
                      Сброс фильтров
                    </CustomButton>
                    <CustomButton styles="mt-5 p-3 w-[80%] bg-[var(--color-green)] text-white text-[14px] rounded-[30px] shadow-sm">Применить</CustomButton>
                  </div>

                  <div className="mt-4">
                    <CustomButton onClick={closeModal} styles="absolute top-2 right-2 border-none">
                      <img src={closeIcon} alt="close icon" width={18} height={18} className="active:opacity-75 duration-75 ease-in" />
                    </CustomButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Filters;
