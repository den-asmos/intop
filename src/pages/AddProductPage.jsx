import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowButton, Color, CustomButton, Checkbox, RadioSelect } from '../components';
import { importIcon, uploadIcon, successIcon } from '../assets';
import { colors } from '../constants/colors';
import { addProduct } from '../utils';

const AddProductPage = () => {
  const navigate = useNavigate();
  const [selectedColor, setCelectedColor] = useState(1);
  const [bidding, setBidding] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState('');
  const [conditions] = useState(['Новый', 'Б/У']);
  const [typesOfSale] = useState(['Рассрочка', 'Опт', 'Розница']);
  const [selectedTypeOfSale, setSelectedTypeOfSale] = useState('');
  const [productInfo, setProductInfo] = useState({
    image: '',
    import: '',
    title: '',
    price: '',
    discount: '',
    description: '',
  });

  const handleProductInfoChange = ({ target }) => {
    if (target.dataset.name === 'image' || target.dataset.name === 'import') {
      setProductInfo({ ...productInfo, [target.dataset.name]: target.files[0] });
    } else {
      setProductInfo({ ...productInfo, [target.dataset.name]: target.value });
    }
  };

  const handleSumbmit = () => {
    const data = new FormData();
    data.append('user_id', JSON.parse(sessionStorage.getItem('user')).user_id);
    data.append('brand_id', 1);
    data.append('title', productInfo.title);
    data.append('price', productInfo.price);
    data.append('discount', productInfo.discount);
    data.append('description', productInfo.description);
    data.append('is_negotiable', bidding);
    data.append('is_new', selectedCondition === 'Новый');
    data.append('is_wholesale', selectedTypeOfSale === 'Опт');
    data.append('is_retail', selectedTypeOfSale === 'Розница');
    data.append('is_installment', selectedTypeOfSale === 'Рассрочка');
    data.append('amount', 5);
    data.append('color_id', selectedColor);
    data.append('image', productInfo.image);

    addProduct(data);
    navigate('/');
  };

  return (
    <div className="bg-white w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center">
        <Link to="/">
          <ArrowButton styles="absolute top-6 left-2 border-none rotate-180 shadow-none" />
        </Link>
        <h2 className="text-[20px] font-light text-center">Добавить товар</h2>
      </div>

      <div className="w-full mt-4 flex flex-col justify-start items-center gap-4">
        <div className={`w-full ${productInfo.image ? 'py-8' : 'py-14'} bg-[var(--color-gray)] rounded-lg`}>
          <label htmlFor="image" className="text-[var(--color-dark-gray)] flex flex-col justify-center items-center">
            {productInfo.image ? (
              <img src={URL.createObjectURL(productInfo.image)} alt="product image" height={50} className="object-contain" />
            ) : (
              <>
                <img src={uploadIcon} alt="upload icon" width={70} height={58} />
                Загрузить фото
              </>
            )}
          </label>
          <input id="image" type="file" className="hidden" onChange={handleProductInfoChange} data-name="image" required={true} />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <CustomButton
            styles={`flex justify-center items-center gap-2 text-center p-3 w-[60%] ${
              productInfo.import ? 'bg-white text-[var(--color-dark-gray)]' : 'bg-[var(--color-green)] text-white'
            } text-[14px] rounded-2xl`}
          >
            <label htmlFor="import product" className="w-full flex justify-center items-center gap-2">
              <img src={importIcon} alt="import icon" height={14} width={14} className="invert" />
              {productInfo.import ? <p>Товар импортирован</p> : <p>Импорт товара</p>}
              <input type="file" id="import product" className="hidden" onChange={handleProductInfoChange} data-name="import" />
            </label>
          </CustomButton>
          {productInfo.import && (
            <div className="p-1 bg-[var(--color-green)] rounded-full">
              <img src={successIcon} alt="success icon" width={14} height={14} />
            </div>
          )}
        </div>

        <div className="mb-5 w-full text-[14px] font-light">
          <p className="mb-2 w-full self-start">Цвет</p>
          <div className="w-full flex justify-start items-center gap-1 flex-wrap">
            {colors.map((color) => (
              <Color key={color.id} color={color} onClick={() => setCelectedColor(color.id)} isSelected={selectedColor === color.id} />
            ))}
          </div>
        </div>

        <div className="w-full text-[14px] font-light">
          <label htmlFor="title" className="mb-2 w-full self-start">
            Название
          </label>
          <input
            id="title"
            type="text"
            data-name="title"
            className="mb-5 w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg p-3 focus:outline-none text-[var(--color-dark-gray)]"
            value={productInfo.title}
            onChange={handleProductInfoChange}
            required={true}
          />
        </div>

        <div className="w-full text-[14px] font-light">
          <label htmlFor="price" className="mb-2 w-full self-start">
            Цена
          </label>
          <input
            id="price"
            type="number"
            data-name="price"
            className="mb-5 w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg p-3 focus:outline-none text-[var(--color-dark-gray)]"
            value={productInfo.price}
            onChange={handleProductInfoChange}
            required={true}
          />
        </div>

        <div className="w-full text-[14px] font-light">
          <label htmlFor="discount" className="mb-2 w-full self-start">
            Скидка
          </label>
          <input
            prefix="%"
            id="discount"
            type="number"
            data-name="discount"
            className="mb-5 w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg p-3 focus:outline-none text-[var(--color-dark-gray)]"
            value={productInfo.discount}
            onChange={handleProductInfoChange}
            required={true}
            placeholder="10%"
          />
        </div>

        <div className="w-full text-[14px] font-light">
          <label htmlFor="price with discount" className="mb-2 w-full self-start">
            Цена со скидкой
          </label>
          <input
            id="price with discount"
            type="number"
            data-name="priceWithDiscount"
            className="mb-5 w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg p-3 focus:outline-none text-[var(--color-dark-gray)]"
            value={productInfo.price - (productInfo.price * productInfo.discount) / 100}
            required={true}
            disabled={true}
          />
        </div>

        <Checkbox value={bidding} onValueChange={setBidding} title="Возможен торг" fontSize="14px" margin="mb-5" />

        <div className="w-full text-[14px] font-light">
          <label htmlFor="description" className="mb-2 w-full self-start">
            Описание
          </label>
          <input
            id="description"
            type="text"
            data-name="description"
            className="mb-5 w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg p-3 focus:outline-none text-[var(--color-dark-gray)]"
            value={productInfo.description}
            onChange={handleProductInfoChange}
            required={true}
          />
        </div>

        <RadioSelect options={conditions} setSelectedOption={setSelectedCondition} title="Состояние" fontSize="14px" margin="mb-5" />

        <RadioSelect options={typesOfSale} setSelectedOption={setSelectedTypeOfSale} title="Тип продажи" fontSize="14px" margin="mb-5" width="25%" />

        <CustomButton onClick={handleSumbmit} styles="mt-5 p-3 w-[80%] bg-[var(--color-green)] text-white text-[14px] rounded-xl">
          Создать
        </CustomButton>
      </div>
    </div>
  );
};

export default AddProductPage;
