import { useState } from 'react';
import { CardLink, CustomButton } from '../components';
import { addImageIcon, passportIcon, successIcon } from '../assets';

const VerifyPrivatePage = () => {
  const [images, setImages] = useState({
    user: '',
    passport: '',
  });

  const handleImageChange = ({ target }) => {
    setImages({ ...images, [target.dataset.role]: target.files[0] });
  };

  console.log(images);

  const handleSumbmit = () => {};

  return (
    <div className="mt-4 bg-white w-full flex flex-col justify-start items-center">
      <h2 className="text-[24px] font-light self-center">Верификация</h2>

      <div className="w-[98%]">
        <p className="mt-2 mb-10 text-[var(--color-dark-gray)] text-[10px] text-center">Загрузите ваше фото и фото паспорта</p>
        <div className="w-full flex flex-col justify-start items-center gap-6">
          <label htmlFor="user" className="w-full flex justify-center items-center">
            <CardLink
              title="Загрузить ваше фото"
              icon={images.user ? successIcon : addImageIcon}
              iconStyles={images.user ? 'invert' : ''}
              color="bg-[var(--color-gray)]"
              textColor="text-black"
              fontSize="11px"
              invert={false}
              nextBtn={!images.user}
            />
            <input type="file" id="user" className="hidden" data-role="user" onChange={handleImageChange} required={true} />
          </label>
          <label htmlFor="passport" className="w-full flex justify-center items-center">
            <CardLink
              title="Загрузить фото паспорта"
              icon={images.passport ? successIcon : passportIcon}
              iconStyles={images.passport ? 'invert' : ''}
              color="bg-[var(--color-gray)]"
              textColor="text-black"
              fontSize="11px"
              invert={false}
              nextBtn={!images.passport}
            />
            <input type="file" id="passport" className="hidden" data-role="passport" onChange={handleImageChange} required={true} />
          </label>
        </div>
      </div>

      <CustomButton onClick={handleSumbmit} styles="mt-10 p-3 w-[80%] bg-[var(--color-green)] text-white text-[14px] rounded-xl">
        Отправить
      </CustomButton>
    </div>
  );
};

export default VerifyPrivatePage;
