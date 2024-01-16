import { useState, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import ArrowButton from './ArrowButton';
import CardLink from './CardLink';
import { addClientIcon, addIcon, addWorkerIcon, buyersIcon, chatsIcon, homeIcon, importIcon, notesIcon, productIcon, shopIcon } from '../assets';

const ControlPanel = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CardLink icon={shopIcon} title="Управление магазином" fontSize="11px" color="green-gradient" nextBtn={true} onClick={openModal} />

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
            <div className="flex min-h-full items-start justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-linear duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="ease-out duration-200 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-full h-screen transform overflow-hidden rounded-t-2xl bg-white p-6 text-left font-light align-middle shadow-xl transition-all">
                  <Dialog.Title as="h2" className="w-full text-[20px] text-center">
                    Управление магазином
                  </Dialog.Title>
                  <div className="flex flex-col justify-center items-start gap-5 mt-10 text-[15px]">
                    <NavLink to="/" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={homeIcon} alt="home icon" height={14} width={14} />
                      Главная
                    </NavLink>

                    <NavLink to="/notes" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={notesIcon} alt="notes icon" height={14} width={14} />
                      Черновики
                    </NavLink>

                    <NavLink to="/products" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={productIcon} alt="product icon" height={14} width={14} />
                      Товары
                    </NavLink>

                    <NavLink to="/products/new" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={addIcon} alt="add icon" height={14} width={14} className="invert" />
                      Добавить товар
                    </NavLink>

                    <NavLink to="/products/import" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={importIcon} alt="import icon" height={14} width={14} />
                      Импорт товаров
                    </NavLink>

                    <NavLink to="/buyers" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={buyersIcon} alt="buyers icon" height={14} width={14} />
                      Покупатели
                    </NavLink>

                    <NavLink to="/chats" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={chatsIcon} alt="chats icon" height={14} width={14} className="invert" />
                      Чаты
                    </NavLink>

                    <NavLink to="/workers/new" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={addWorkerIcon} alt="add worker icon" height={14} width={14} />
                      Добавить сотрудника
                    </NavLink>

                    <NavLink to="/buyers/new" onClick={closeModal} className="flex justify-start items-center gap-4">
                      <img src={addClientIcon} alt="add client icon" height={14} width={14} />
                      Добавить клиента
                    </NavLink>
                  </div>

                  <div className="mt-4">
                    <ArrowButton onClick={closeModal} styles="absolute top-6 left-2 border-none rotate-180 shadow-none" />
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

export default ControlPanel;
