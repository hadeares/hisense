import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Mini-LED',
    imageSrc: '/TV_ULED_MiniLED.png',
    labelSrc: '/02-MiniLED.png',
    labelWidth: 197.5,
    labelHeight: 25
  },
  {
    name: 'QLED',
    imageSrc: '/TV_QLED.png',
    labelSrc: '/02-QLED.png',
    labelWidth: 87.59,
    labelHeight: 25
  },
  {
    name: 'UHD',
    imageSrc: '/TV_UHD_4K.png',
    labelSrc: '/02-UHD4k.png',
    labelWidth: 119.35,
    labelHeight: 25
  },
  {
    name: 'FHD',
    imageSrc: '/TV_Smart_tv.png',
    labelSrc: '/02-SmartTV.png',
    labelWidth: 164.66,
    labelHeight: 25
  }
];

interface CategoriesProps {
  onFilterClick: (technology: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onFilterClick }) => {
  const handleFilterClick = (technology: string) => {
    onFilterClick(technology);
  };

  return (
    <div className="bg-black py-24">
      <div className="max-w-[1250px] mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-[28px] lg:text-4xl font-bold mb-[40px]">
          Conheça a TV certa para você
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-0 rounded-[40px] w-full h-[400px] lg:h-[350px] flex flex-col justify-between items-center overflow-hidden"
            >
              <div className="bg-gradient-to-t from-dark opacity-20 absolute top-0 h-full w-full z-[2]"></div>
              <Image
                src={product.imageSrc}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-[40px]"
              />
              <button
                onClick={() => handleFilterClick(product.name)}
                className="absolute bottom-7 px-4 py-2 pt-3 border-2 border-white text-white rounded-full text-sm bg-black bg-opacity-40 hover:bg-hisense hover:border-hisense duration-300 z-[3]"
              >
                Saiba mais
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
