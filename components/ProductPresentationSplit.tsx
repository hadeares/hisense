import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { IoClose } from "react-icons/io5";

// Tipos de dados fornecidos
interface Store {
  name: string;
  logo: string;
  link: string;
}

interface Product {
  type: string;
  productImages: string[];
  technologyImage?: string;
  name: string;
  copy: string;
  features: string[];
  dimensions: string;
  models: string[];
}

const productData = {
  DJ: {
    productImages: ['/Split/DJ/AC_SplitDJ_Carrossel02.png', '/Split/DJ/AC_SplitDJ_Carrossel01.png'],
    technologyImage: '/Split/inverte_split.png',
    name: 'Split DJ',
    copy: 'AR-CONDICIONADO',
    features: ['Com Wi-fi pelo APP ConnectLife', 'Mais economia e sustentabilidade com o gás Refrigerador R32', 'Filtro 4 em 1 (removível e lavável)', 'Auto limpeza da Evaporadora', 'Modo Smart', '05 velocidades de ventilação'],
    dimensions: 'Disponíveis nas capacidades 9.000 a 36.000 btu’s, em 220v',
    models: ['220v | DJ-01'],
  },
  TD: {
    productImages: ['/Split/TD/AC_SplitTD_Carrossel01.png', '/Split/TD/AC_SplitTD_Carrossel02.png', '/Split/TD/AC_SplitTD_Carrossel03.png'],
    technologyImage: '/Split/inverte_split.png',
    name: 'Split TD',
    copy: 'AR-CONDICIONADO',
    features: ['Com Wi-fi pelo APP ConnectLife', 'Mais economia e sustentabilidade com o gás Refrigerador R32', 'Filtro 4 em 1 (removível e lavável)', 'Auto limpeza da Evaporadora', 'Modo Smart', '05 velocidades de ventilação'],
    dimensions: 'Disponíveis nas capacidades 9.000 a 36.000 btu’s, em 220v',
    models: ['220v | TD-01'],
  },
  TT: {
    productImages: ['/Split/TT/AC_SplitTT_Carrossel01.png', '/Split/TT/AC_SplitTT_Carrossel02.png', '/Split/TT/AC_SplitTT_Carrossel03.png'],
    technologyImage: '/Split/inverte_split.png',
    name: 'Split TT',
    copy: 'AR-CONDICIONADO',
    features: ['Com Wi-fi pelo APP ConnectLife', 'Mais economia e sustentabilidade com o gás Refrigerador R32', 'Filtro 4 em 1 (removível e lavável)', 'Auto limpeza da Evaporadora', 'Modo Smart', '05 velocidades de ventilação'],
    dimensions: 'Disponíveis nas capacidades 9.000 a 36.000 btu’s, em 220v',
    models: ['220v | TT-01'],
  },
  VQ: {
    productImages: ['/Split/VQ/AC_SplitVQ_Carrossel01.png', '/Split/VQ/AC_SplitVQ_Carrossel02.png', '/Split/VQ/AC_SplitVQ_Carrossel03.png'],
    technologyImage: '/Split/inverte_split.png',
    name: 'Split VQ',
    copy: 'AR-CONDICIONADO',
    features: ['Com Wi-fi pelo APP ConnectLife', 'Mais economia e sustentabilidade com o gás Refrigerador R32', 'Filtro 4 em 1 (removível e lavável)', 'Auto limpeza da Evaporadora', 'Modo Smart', '05 velocidades de ventilação'],
    dimensions: 'Disponíveis nas capacidades 9.000 a 36.000 btu’s, em 220v',
    models: ['220v | VQ-01'],
  },
};

const ProductPresentationSplit = ({ productProps }: { productProps: Product }) => {
  const [thumbsSwiper, setThumbsSwiper]: any = useState(null);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof productData>('DJ'); // Categoria inicial
  const [selectedModel, setSelectedModel] = useState<string>(productProps.models[0]); // Modelo inicial

  const handleCategoryChange = (category: keyof typeof productData) => {
    setSelectedCategory(category);
    setSelectedModel(productData[category].models[0]); // Atualiza modelo inicial da nova categoria
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
  };

  return (
    <section className="px-3 lg:px-0">
      <div className="grid md:grid-cols-2 items-center max-w-[1250px] mx-auto py-10 gap-10">
        <div className="px-3 w-[90vw] md:w-auto">
          {productData[selectedCategory].productImages && (
            <>
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-swiper"
              >
                {productData[selectedCategory].productImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center w-full h-full relative p-5">
                      <Image src={image} alt="" width={1000} height={20} quality={100} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={(swiperInstance: any) => setThumbsSwiper(swiperInstance)}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-swiper2"
              >
                {productData[selectedCategory].productImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className="cursor-pointer max-h-[80px] object-cover"
                      src={image}
                      alt=""
                      width={252}
                      height={32}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>

        <div className="lg:ps-20 ps-2">
          <div>
            {productData[selectedCategory].technologyImage && (
              <div className="flex items-start gap-2">
                <Image
                  src={productData[selectedCategory].technologyImage}
                  alt=""
                  width={40}
                  height={40}
                />
                <span>Garantia de 10 anos no compressor</span>
              </div>
            )}

            <span className="text-gray-600 text-xl">{productData[selectedCategory].copy}</span>
            <h2 className="text-4xl font-bold mb-3 mt-2">{productData[selectedCategory].name}</h2>
          </div>

          <div className="flex gap-2">
            <p className="text-sm">{productData[selectedCategory].dimensions}</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-3 my-4 max-w-[300px]">
            <ul className="text-gray-600 text-sm list-disc ps-7 flex flex-col gap-2">
              {productData[selectedCategory].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center text-gray-600 gap-4 mt-5">
            <h4>Categoria:</h4>
            <div className="flex gap-2">
              {Object.keys(productData).map((category) => (
                <span
                  key={category}
                  onClick={() => handleCategoryChange(category as keyof typeof productData)}
                  className={`text-md border border-gray-400 text-gray-500 px-3 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                    selectedCategory === category ? 'bg-hisense text-white' : ''
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center text-gray-600 gap-4 mt-5">
            <h4>Modelos:</h4>
            <div className="flex gap-2">
              {productData[selectedCategory].models.map((model, index) => (
                <span
                  key={index}
                  onClick={() => handleModelChange(model)}
                  className={`text-md border border-gray-400 text-gray-500 px-3 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                    selectedModel === model ? 'bg-hisense text-white' : ''
                  }`}
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentationSplit;
