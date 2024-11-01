import Image from 'next/image';

const productItems = [
  {
    name: 'SPLIT HI-WALL',
    imageSrc: '/splithi.png',
  },
  {
    name: 'LAVA E SECA 3S',
    imageSrc: '/lavaroupas.png',
  },
  {
    name: 'WINE COOLER',
    imageSrc: '/winicoller.png',
  },
  {
    name: 'LAVA LOUÇAS',
    imageSrc: '/lavalouca.png',
  },
];

const ProductSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1250px] mx-auto text-center">

        <div className="mb-10 text-center">
          <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Descubra a solução ideal para sua vida</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 px-4 sm:px-6 lg:px-8">

          {productItems.map((product) => (
            <div
              key={product.name}
              className="w-full h-auto border border-gray-300 rounded-[15px] sm:rounded-[20px] overflow-hidden"
            >
              <div className="w-full h-[180px] sm:h-[250px] bg-gray-100">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 sm:p-6 bg-[#F3F4F6]">
                <p className="text-center text-sm sm:text-lg font-semibold">{product.name}</p>
                <div className="flex justify-between mt-4">
                  <button className="border border-gray-400 rounded-full px-4 py-2 text-xs sm:text-sm">
                    Saiba mais
                  </button>
                  <button className="bg-[#00AAA6] text-white rounded-full px-4 py-2 text-xs sm:text-sm">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
