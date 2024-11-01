import { forwardRef, useImperativeHandle, useState } from 'react';
import Image from 'next/image';
import { IoMdOptions } from 'react-icons/io';
import { motion } from 'framer-motion';
import Link from 'next/link';

const tvProducts = [
  {
    name: 'Hisense Smart TV FHD A4N',
    technology: ['FHD'],
    resolution: 'FHD',
    sizes: ['40', '43'],
    model: 'A4N',
    features: ['Vidaa Smart OS', 'DTS Virtual:X audio', 'Natural Color Enhancer'],
    imageSrc: '/A4N/1.png',
    link: '/televisores/A4N',
    icons: '/A4N-icons.png'
  },
  {
    name: 'Hisense Smart TV UHD 4K A6K',
    technology: ['UHD'],
    resolution: '4K',
    sizes: ['50', '58', '65', '70'],
    model: 'A6K',
    features: ['HDR10+', 'DTS Virtual:X', 'Dolby Vision', 'ALLM for gaming', 'VIDAA Smart OS'],
    imageSrc: '/A6K/gallery-1.png',
    link: '/televisores/A6K',
    icons: '/A6K-icons.png'
  },
  {
    name: 'Hisense Smart TV QLED 4K Q6N',
    technology: ['QLED'],
    resolution: '4K',
    sizes: ['50', '55', '65', '85'],
    model: 'Q6N',
    features: ['Dolby Atmos', 'HDR10+', '4K upscaling', 'Game Mode Plus'],
    imageSrc: '/Q6N/1.png',
    link: '/televisores/Q6N',
    icons: '/Q6N-icons.png'
  },
  {
    name: 'Hisense Smart TV ULED MiniLED 4K U6N',
    technology: ['Mini-LED'],
    resolution: '4K',
    sizes: ['55', '65'],
    model: 'U6N',
    features: ['Dolby Vision', 'Dolby Atmos', 'HDR10+', '60Hz refresh rate', 'ALLM'],
    imageSrc: '/U6N/1.png',
    link: '/televisores/U6N',
    icons: '/U6N-icons.png'
  },
  {
    name: 'Hisense Smart TV ULED MiniLED 4K U7N',
    technology: ['Mini-LED'],
    resolution: '4K',
    sizes: ['55', '65', '75'],
    model: 'U7N',
    features: ['120Hz refresh rate', 'Dolby Vision IQ', 'AI Sports Mode', 'Game Mode Pro', 'HDMI 2.1'],
    imageSrc: '/U7N/U7N_1.png',
    link: '/televisores/U7N',
    icons: '/U7N-icons.png'
  },
  {
    name: 'Hisense Smart TV ULED MiniLED U8N',
    technology: ['Mini-LED'],
    resolution: '4K',
    sizes: ['75', '85'],
    model: 'U8N',
    features: ['144Hz refresh rate', 'Dolby Vision', 'Dolby Atmos', 'HDR10+', 'Game Mode Pro', 'WiFi6'],
    imageSrc: '/U8N/1.png',
    link: '/televisores/U8N',
    icons: '/U8N-icons.png'
  },
  {
    name: 'Hisense Smart TV QLED 100U7',
    technology: ['QLED'],
    resolution: '4K',
    sizes: ['100'],
    model: '100U7',
    features: ['Dolby Vision IQ', 'Filmmaker Mode', 'AI Sports Mode', 'Game Mode Pro', 'HDMI 2.1'],
    imageSrc: '/100U7/100U7_1.png',
    link: '/televisores/100U7N',
    icons: '/100U7-icons.png'
  },
];

const FindIdealTV = forwardRef((props, ref) => {
  const [filters, setFilters] = useState({
    size: '',
    resolution: '',
    model: '',
    technology: '',
  });

  useImperativeHandle(ref, () => ({
    applyTechnologyFilter(technology: any) {
      setFilters((prev) => ({ ...prev, technology }));
    },
  }));

  const [showMore, setShowMore] = useState(false);

  const updateFilter = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const removeFilter = (filterType: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: '',
    }));
  };

  const filteredProducts = tvProducts.filter((product) => {
    const matchesSize = filters.size === '' || product.sizes.includes(filters.size);
    const matchesResolution = filters.resolution === '' || product.resolution === filters.resolution;
    const matchesModel = filters.model === '' || product.model === filters.model;
    const matchesTechnology = filters.technology === '' || product.technology.includes(filters.technology);
    return matchesSize && matchesResolution && matchesModel && matchesTechnology;
  });

  const productsToDisplay = filteredProducts.slice(0, 3);


  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1250px] mx-auto px-4">

        {/* Título da página */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-12">
          <h4 className="text-dark text-2xl sm:text-3xl lg:text-4xl font-bold mb-[40px] text-center">Encontre a TV Ideal</h4>
        </div>

        <div className='lg:hidden'>
          <div className='flex'>
            <IoMdOptions className="text-hisense mr-2 text-xl mt-1" />
            <span className="text-hisense font-semibold text-2xl">Filtros</span>
          </div>
          <span className="text-sm lg:text-base text-gray-400 mt-1">Exibindo {filteredProducts.length} resultados</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between w-full h-auto lg:border sm:border-gray-300 sm:rounded-full lg:px-5 py-3 overflow-x-scroll lg:overflow-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-0 w-full pe-8 lg:border-r border-gray-300 mr-8">
            <div className='lg:flex items-center hidden'>
              <div className='flex'>
                <IoMdOptions className="text-hisense mr-2 text-xl mt-1" />
                <span className="text-hisense font-semibold text-2xl">Filtros</span>
              </div>
              <span className="ml-4 text-xs sm:text-sm lg:text-base text-gray-400 mt-1">Exibindo {filteredProducts.length} resultados</span>
            </div>
            <div className="flex flex-wrap mt-2 sm:mt-0 lg:ms-auto mr-auto lg:mr-0 ps-1">
              {Object.entries(filters).map(([filterType, filterValue]) =>
                filterValue ? (
                  <button
                    key={filterType}
                    className="ml-3 border border-gray-300 text-gray-500 rounded-full px-4 lg:px-3 py-1 pt-2 text-sm flex items-center mt-2 sm:mt-0"
                    onClick={() => removeFilter(filterType)}
                  >
                    {filterValue} <span className="ml-1 sm:ml-2 text-gray-500 hover:text-red-600 duration-300 text-md">×</span>
                  </button>
                ) : null
              )}
            </div>
          </div>

          <div className="flex w-full gap-3">
            <select
              className="px-3 py-2 text-sm text-gray-600 w-[130px] bg-gray-100 rounded-lg cursor-pointer"
              value={filters.size}
              onChange={(e) => updateFilter('size', e.target.value)}
            >
              <option value="">Polegadas</option>
              <option value="40">40</option>
              <option value="43">43</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="58">58</option>
              <option value="65">65</option>
              <option value="70">70</option>
              <option value="75">75</option>
              <option value="85">85</option>
              <option value="100">100</option>
            </select>

            <select
              className="px-3 py-2 text-sm text-gray-600 w-[130px] bg-gray-100 rounded-lg cursor-pointer"
              value={filters.resolution}
              onChange={(e) => updateFilter('resolution', e.target.value)}
            >
              <option value="">Resolução</option>
              <option value="FHD">FHD</option>
              <option value="UHD">HD</option>
              <option value="4K">4K</option>
            </select>

            <select
              className="px-3 py-2 text-sm text-gray-600 w-[130px] bg-gray-100 rounded-lg cursor-pointer"
              value={filters.model}
              onChange={(e) => updateFilter('model', e.target.value)}
            >
              <option value="">Modelo</option>
              <option value="A4N">A4N</option>
              <option value="A6K">A6K</option>
              <option value="Q6N">Q6N</option>
              <option value="U6N">U6N</option>
              <option value="U7N">U7N</option>
              <option value="U8N">U8N</option>
              <option value="100U7">100U7</option>
            </select>

            <select
              className="px-3 py-2 text-sm text-gray-600 w-[130px] bg-gray-100 rounded-lg cursor-pointer"
              value={filters.technology}
              onChange={(e) => updateFilter('technology', e.target.value)}
            >
              <option value="">Tecnologia</option>
              <option value="FHD">FHD</option>
              <option value="UHD">UHD</option>
              <option value="QLED">QLED</option>
              <option value="Mini-LED">Mini-LED</option>
            </select>
          </div>
        </div>

        {/* Produtos principais */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {productsToDisplay.map((product, index) => (
            <Link href={product.link} key={product.name}>
              <div className="w-full border border-gray-100 rounded-[12px] lg:rounded-[16px] overflow-hidden hover:shadow-xl duration-300"
              >
                <div className="w-full h-[350px] lg:h-[250px] bg-white">
                  <Image
                    src={product.imageSrc || '/default-image.png'}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4 pt-10 lg:p-6 bg-[#F3F4F6]">
                  <h3 className="text-center text-lg lg:text-lg font-semibold">{product.name}</h3>
                  <div className="flex justify-between px-8 mt-4 sm:mt-6 grayscale">
                    <Image
                      key={index}
                      src={product.icons}
                      alt="Technology Icons"
                      width={350}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-between mt-4 lg:mt-6">
                    <button className="bg-hisense text-white rounded-full px-10 py-2 text-xs sm:text-sm lg:text-base w-full hover:brightness-110 duration-300">
                      Saiba mais
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Mostrar todos os produtos na parte inferior */}
        {showMore && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10 cursor-pointer"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {filteredProducts.slice(3).map((product, index) => (
              <Link href={product.link} key={product.name}>
                <div
                  className="w-full border border-gray-100 rounded-[12px] lg:rounded-[16px] overflow-hidden hover:shadow-xl duration-300"
                >
                  <div className="w-full h-350 lg:h-[250px] bg-white">
                    <Image
                      src={product.imageSrc || '/default-image.png'}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 pt-10 lg:p-6 bg-[#F3F4F6]">
                    <h3 className="text-center text-lg lg:text-lg font-semibold">{product.name}</h3>
                    <div className="flex justify-between px-8 mt-4 sm:mt-6">
                      <Image
                        key={index}
                        src={product.icons}
                        alt="Technology Icons"
                        width={350}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex justify-between mt-4 lg:mt-6">
                      <button className="bg-hisense text-white rounded-full px-10 py-2 text-xs sm:text-sm lg:text-base w-full hover:brightness-110 duration-300">
                        Saiba mais
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        )}

        {/* Botão Ver Todos os Modelos */}
        <div className="flex justify-center mt-6 lg:mt-8">
          <button
            className="text-base sm:text-lg lg:text-xl hover:text-hisense duration-300 border-b border-gray-300 hover:border-hisense"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Mostrar Menos' : 'Ver todos os modelos'}
          </button>
        </div>
      </div>
    </section>
  );
});

FindIdealTV.displayName = 'FindIdealTV';

export default FindIdealTV;
