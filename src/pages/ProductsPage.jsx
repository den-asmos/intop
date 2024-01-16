import { useState, useEffect } from 'react';
import { ArrowButton, Loader, ProductCard } from '../components';
import { Link, useParams } from 'react-router-dom';
import { getCategories, getProducts, getProductsByCategory } from '../utils';
import { noImage } from '../assets';
import { ru, uz } from '../constants';

const ProductsPage = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState(ru);
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentLanguage = window.navigator.language.slice(0, 2).toLowerCase();
    setLanguage(currentLanguage === 'ru' ? ru : uz);

    if (id) {
      getProductsByCategory(id).then((productsData) => setProducts(productsData));
    } else {
      getProducts().then((productsData) => setProducts(productsData));
    }

    getCategories()
      .then((categoriesData) => setCategories(categoriesData))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const categoryName = categories?.find((category) => category.id === Number(id))?.name;

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <Link to="/">
          <ArrowButton styles="absolute top-6 left-2 border-none rotate-180 shadow-none" />
        </Link>
        <h2 className="text-[20px] font-light self-center">{categoryName ? categoryName : 'Товары'}</h2>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
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
    </div>
  );
};

export default ProductsPage;
