import { useState, Fragment, useEffect } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { CustomButton, NextButton, Loader } from '.';
import { closeIcon } from '../assets';
import { getCategories } from '../utils';

const Categories = ({ language }) => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCategories()
      .then((categoriesData) => setCategories(categoriesData))
      .finally(() => setLoading(false));
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-light leading-3 self-start">{language.Categories}</h1>

        <button onClick={openModal}>
          <p className="text-[var(--color-dark-gray)] text-[12px] font-light">{language['View-all']}</p>
        </button>
      </div>

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
                    {language.Categories}
                  </Dialog.Title>
                  <div className="flex flex-col justify-center items-start mt-4">
                    {loading ? (
                      <Loader />
                    ) : (
                      categories?.map((category) => (
                        <Link to={`/products/${category.id}`} key={category.id} className="w-full p-2 flex justify-between items-center border-b">
                          <p className="text-[14px]">{language[category.name]}</p>
                          <NextButton width="14px" height="14px" />
                        </Link>
                      ))
                    )}
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

export default Categories;
