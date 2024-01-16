import { useState, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import CustomButton from './CustomButton';
import { closeIcon } from '../assets';

const StoriesCard = ({ image, title, isViewed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center text-center" onClick={openModal}>
        <div
          className={`w-[62px] h-[62px] flex justify-center items-center rounded-xl ${
            isViewed ? 'viewed-story-border' : 'stories-border '
          } active:opacity-75 duration-75 ease-out`}
        >
          <img src={image} alt={title} width={56} height={56} className="object-contain rounded-[10px]" />
        </div>
        <h2 className="mt-1 w-[56px] font-light text-[12px] text-[var(--color-dark-gray)]">{title}</h2>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md h-[90vh] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Story
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Here is some info</p>
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

export default StoriesCard;
