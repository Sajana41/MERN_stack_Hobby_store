import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import Context from '../context';

const ProductCard = ({ product, handleAddToCart }) => (
  <Link
    to={`product/${product?._id}`}
    className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-40 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex"
  >
    <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]">
      <img
        src={product.productImage[0]}
        alt={product?.productName}
        className="object-scale-down h-full w-full hover:scale-110 transition-transform"
      />
    </div>
    <div className="p-4 grid w-full gap-2">
      <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
        {product?.productName}
      </h2>
      <p className="capitalize text-slate-500">{product?.category}</p>
      <div className="flex gap-3">
        <p className="text-red-600 font-medium">{displayINRCurrency(product?.sellingPrice)}</p>
        <p className="text-slate-500 line-through">{displayINRCurrency(product?.price)}</p>
      </div>
      <button
        className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full"
        onClick={(e) => handleAddToCart(e, product?._id)}
      >
        Add to Cart
      </button>
    </div>
  </Link>
);

const LoadingSkeleton = () => (
  <div className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-40 bg-white rounded-lg shadow flex animate-pulse">
    <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]" />
    <div className="p-4 grid w-full gap-2">
      <div className="bg-slate-200 h-5 rounded-full"></div>
      <div className="bg-slate-200 h-5 rounded-full"></div>
      <div className="bg-slate-200 h-5 rounded-full"></div>
      <div className="bg-slate-200 h-5 rounded-full"></div>
    </div>
  </div>
);

const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollElement = useRef();

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const categoryProduct = await fetchCategoryWiseProduct(category);
      setData(categoryProduct?.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>

      <div className="relative">
        <button
          className="bg-white shadow-md rounded-full p-2 absolute left-0 top-1/2 transform -translate-y-1/2 text-lg hidden md:block z-10"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-md rounded-full p-2 absolute right-0 top-1/2 transform -translate-y-1/2 text-lg hidden md:block z-10"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        <div
          className="flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all"
          ref={scrollElement}
        >
          {loading
            ? Array.from({ length: 10 }).map((_, index) => <LoadingSkeleton key={index} />)
            : data.map((product) => (
                <ProductCard key={product._id} product={product} handleAddToCart={handleAddToCart} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardProduct;
