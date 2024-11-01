import { useState } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface Store {
  name: string;
  logo: string;
  link: string;
}

interface Product {
  productImages: string[];
  technologyImage: string;
  name: string;
  copy: string;
  features: string[];
  models: string[]; // Modelos
  volt: string[];
  btus: string[];
}

interface ProductModalProps {
  productProps: Product;
  storeLinks: Record<string, Store[]>;
  showWhereToBuyModal: boolean;
  setShowWhereToBuyModal: (show: boolean) => void;
  onShowSpecifications: () => void; // Função para especificações técnicas
}

const ProductModal: React.FC<ProductModalProps> = ({
  productProps,
  storeLinks,
  showWhereToBuyModal,
  setShowWhereToBuyModal,
  onShowSpecifications
}) => {
  const [selectedModel, setSelectedModel] = useState<string>(productProps.models[0]);
  const [selectedVolt, setSelectedVolt] = useState<string>(productProps.volt[0]);
  const [selectedBTU, setSelectedBTU] = useState<string>(productProps.btus[0]);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
  };

  const handleVoltChange = (volt: string) => {
    setSelectedVolt(volt);
  };

  const handleBTUChange = (btu: string) => {
    setSelectedBTU(btu);
  };

  const getStoreLinkKey = (): string => {
    return `${selectedModel} ${selectedVolt} ${selectedBTU}`;
  };

  const storeLinkKey = getStoreLinkKey();

  return (
    <>
      <section className="px-3 lg:px-0 py-14">
        <div className="grid md:grid-cols-2 items-center max-w-[1250px] mx-auto py-10 gap-10">
          {/* Seção de Imagens do Produto */}
          <div className="px-3 w-[90vw] md:w-auto">
            {productProps.productImages && (
              <>
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="product-swiper"
                >
                  {productProps.productImages.map((image, index) => (
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
                  className="product-swiper2 mt-4"
                >
                  {productProps.productImages.map((image, index) => (
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

          {/* Seção de Detalhes do Produto */}
          <div className="lg:ps-20 ps-2">
            <div>
              <h2 className="text-4xl font-bold mb-3">{productProps.name}</h2>
              <span className="text-gray-600 text-xl">{productProps.copy}</span>
            </div>

            <div className="bg-gray-100 rounded-2xl px-3 py-6 my-4 max-w-[98%]">
              <ul className="text-gray-600 text-sm list-disc ps-7 flex flex-col gap-2">
                {productProps.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Seleção de BTU */}
            <div className="flex flex-col text-gray-600 gap-4 mt-5">
              <h4 className="text-lg font-semibold">Capacidade:</h4>
              <div className="flex flex-wrap gap-2">
                {productProps.btus.map((btu, index) => (
                  <span
                    key={btu} // Use o valor do BTU como chave, assumindo que são únicos
                    onClick={() => handleBTUChange(btu)}
                    className={`text-lg border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                      selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''
                    }`}
                  >
                    {btu}
                  </span>
                ))}
              </div>
            </div>

            {/* Seleção de Modelos */}
            <div className="flex flex-col text-gray-600 gap-4 mt-5">
              <h4 className="text-lg font-semibold">Modelo:</h4>
              <div className="flex flex-wrap gap-2">
                {productProps.models.map((model, index) => (
                  <span
                    key={model} // Use o nome do modelo como chave, assumindo que são únicos
                    onClick={() => handleModelChange(model)}
                    className={`text-lg border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                      selectedModel === model ? 'bg-hisense text-white border-hisense' : ''
                    }`}
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* Seleção de Voltagem */}
            <div className="flex flex-col text-gray-600 gap-4 mt-5">
              <h4 className="text-lg font-semibold">Voltagem:</h4>
              <div className="flex flex-wrap gap-2">
                {productProps.volt.map((volt, index) => (
                  <span
                    key={volt} // Use o valor da voltagem como chave, assumindo que são únicos
                    onClick={() => handleVoltChange(volt)}
                    className={`text-lg border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                      selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''
                    }`}
                  >
                    {volt}
                  </span>
                ))}
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="mt-12 flex gap-2">
              <button
                type="button"
                className="flex items-center justify-center text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl"
                onClick={() => setShowWhereToBuyModal(true)}
              >
                Comprar
              </button>
              <button
                type="button"
                className="flex items-center justify-center text-md border border-gray-400 transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-gray-500 hover:shadow-xl"
                onClick={onShowSpecifications}
              >
                Especificações Técnicas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal "Onde Comprar" */}
      {showWhereToBuyModal && (
        <section>
          <div className="fixed inset-0 flex justify-end z-60">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-dark bg-opacity-70"
              onClick={() => setShowWhereToBuyModal(false)}
            ></div>

            {/* Drawer Lateral */}
            <div className="relative w-[80%] md:w-[50%] lg:w-[30%] h-full bg-white p-5 overflow-y-auto">
              {/* Botão de Fechar */}
              <button
                className="absolute top-5 right-5 text-gray-400 text-2xl rounded-full border border-gray-400"
                onClick={() => setShowWhereToBuyModal(false)}
              >
                <IoClose />
              </button>

              {/* Imagem do Produto */}
              <div className="mb-5">
                <Image
                  src={productProps.productImages[0]}
                  alt={productProps.name}
                  width={252}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Nome do Produto */}
              <div className="mb-5">
                <h4 className="text-2xl font-bold">{productProps.name}</h4>
              </div>

              {/* Seleção de BTU */}
              <div className="flex flex-col gap-2 mb-5">
                <h4 className="text-lg font-semibold">Capacidade:</h4>
                <div className="flex flex-wrap gap-2">
                  {productProps.btus.map((btu, index) => (
                    <span
                      key={btu} // Use o valor do BTU como chave
                      onClick={() => handleBTUChange(btu)}
                      className={`text-lg border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                        selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''
                      }`}
                    >
                      {btu}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seleção de Modelos */}
              <div className="flex flex-col gap-2 mb-5">
                <h4 className="text-lg font-semibold">Modelo:</h4>
                <div className="flex flex-wrap gap-2">
                  {productProps.models.map((model, index) => (
                    <span
                      key={model} // Use o nome do modelo como chave
                      onClick={() => handleModelChange(model)}
                      className={`text-lg border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                        selectedModel === model ? 'bg-hisense text-white border-hisense' : ''
                      }`}
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seleção de Voltagem */}
              <div className="flex flex-col gap-2 mb-5">
                <h4 className="text-lg font-semibold">Voltagem:</h4>
                <div className="flex flex-wrap gap-2">
                  {productProps.volt.map((volt, index) => (
                    <span
                      key={volt} // Use o valor da voltagem como chave
                      onClick={() => handleVoltChange(volt)}
                      className={`text-lg border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                        selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''
                      }`}
                    >
                      {volt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Disponibilidade nas Lojas */}
              <div>
                <p className="mt-10 pb-3 border-b border-gray-200">Disponível agora em:</p>

                <ul className="flex flex-col gap-5 mt-8">
                  {storeLinks[storeLinkKey]?.map((store, index) => (
                    <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-5">
                      <Image src={store.logo} alt={store.name} width={150} height={32} />
                      <a href={store.link} target="_blank" rel="noopener noreferrer">
                        <button className="border border-hisense text-white rounded-3xl text-sm pb-2 pt-3 px-5 duration-500 bg-hisense">
                          Comprar
                        </button>
                      </a>
                    </li>
                  ))}
                  {!storeLinks[storeLinkKey] && (
                    <p className="text-gray-500">Não há lojas disponíveis para essa combinação.</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductModal;
