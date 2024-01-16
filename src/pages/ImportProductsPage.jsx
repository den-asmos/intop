import { Link } from 'react-router-dom';
import { ArrowButton } from '../components';

const ImportProductsPage = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center">
        <Link to="/">
          <ArrowButton styles="absolute top-6 left-2 border-none rotate-180 shadow-none" />
        </Link>
        <h2 className="text-[20px] font-light text-center">Импорт товаров</h2>
      </div>

      <div className="w-full mt-4 flex flex-col justify-start items-center gap-4"></div>
    </div>
  );
};

export default ImportProductsPage;
