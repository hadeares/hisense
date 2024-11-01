import React from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

interface ProductBarProps {
  productName: string;
  openStoreModal: () => void;
}

const ProductBar: React.FC<ProductBarProps> = ({ productName, openStoreModal }) => {
  return (
    <div className="sticky top-0 left-0 w-full h-[60px] bg-dark z-[9] hidden lg:block">
      <div className="flex justify-between items-center h-full w-full max-w-[1250px] mx-auto px-3">
        <h5 className="text-gray-300">{productName}</h5>
        <div className="flex items-center">
          <ul className="text-gray-300 flex gap-6">
            <li
              className="hover:text-hisense duration-300 cursor-pointer"
              onClick={() => document.getElementById('principais-caracteristicas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Principais características
            </li>
            <li
              className="hover:text-hisense duration-300 cursor-pointer"
              onClick={() => document.getElementById('specifications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Especificações
            </li>
            <li
              className="hover:text-hisense duration-300 cursor-pointer"
              onClick={openStoreModal}
            >
              Onde Comprar
            </li>
          </ul>
          <div
            className="text-white text-3xl ms-8 mb-1 cursor-pointer hover:text-hisense duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaArrowCircleUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBar;
