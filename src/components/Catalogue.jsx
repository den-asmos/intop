import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import CustomButton from './CustomButton';
import { filterIcon, noImage, categoryIcon, instagram } from '../assets';
import Loader from './Loader';
import { getProducts } from '../utils';
import Filters from './Filters';

const Catalogue = ({ language }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((productsData) => setProducts(productsData))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="w-full flex justify-between items-center">
        <Filters language={language} />

        <div className="flex justify-center items-center gap-2">
          <img src={instagram} alt="instagram" width={18} height={18} />
          <div className="p-[2px] rounded-sm bg-[var(--color-green)]">
            <img src={categoryIcon} alt="category icon" width={18} height={18} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-light leading-3 self-start">{language.Catalog}</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              image={product.cloud_link ? (product.cloud_link.split('/').includes('storage.bunnycdn.com') ? noImage : product.cloud_link) : noImage}
              title={product.title}
              price={product.price}
              language={language}
            />
          ))}
      </div>
    </>
  );
};

export default Catalogue;
