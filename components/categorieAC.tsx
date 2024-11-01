// components/Categories.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    name: 'Split Hi-Wall',
    imageSrc: '/Ac-home/split.png',

    copy: 'Descubra a eficiência do Split Hi-Wall para sua sala.'
  },
  {
    name: 'Portátil',
    imageSrc: '/Ac-home/portatil.png',

    copy: 'Movimente-se com facilidade usando nossos modelos portáteis.'
  },
  {
    name: 'Cassete',
    imageSrc: '/Ac-home/cassete.png',

    copy: 'Sofisticação e desempenho com nossos modelos Cassete.'
  },
  {
    name: 'Piso Teto',
    imageSrc: '/Ac-home/piso-teto.png',

    copy: 'Ideal para grandes espaços, oferecendo potência e eficiência.'
  },
  {
    name: 'Janela',
    imageSrc: '/Ac-home/janela.png',

    copy: 'Compacto e eficiente, perfeito para ambientes menores.'
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
    <div className="bg-dark">
      <div className="max-w-[1250px] mx-auto text-center px-4 sm:px-6 lg:px-8">

        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative bg-gray-800 p-0 rounded-[40px] w-full h-[400px] lg:h-[350px] flex flex-col justify-between items-center overflow-hidden group cursor-pointer"
                  onClick={() => handleFilterClick(product.name)}
                >
                  <div className="bg-gradient-to-t from-dark opacity-20 absolute top-0 h-full w-full z-[2]"></div>
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[40px] group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Nome do Produto */}
                  <h3 className="absolute bottom-20 text-white text-lg font-semibold z-[3]">
                    {product.name}
                  </h3>

                  {/* Botão "Saiba mais" */}
                  <button
                    className="absolute bottom-7 px-4 py-2 pt-3 border-2 border-white text-white rounded-full text-sm bg-black bg-opacity-40 hover:bg-hisense hover:border-hisense duration-300 z-[3]"
                  >
                    Saiba mais
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
