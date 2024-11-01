import { useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

interface Store {
    name: string;
    logo: string;
    link: string;
}

interface StoreAvailability {
    options: {
        options1?: string;
        options2?: string;
    };
    stores: Store[];
}

interface Product {
    productImages: string[];
    technologyImage?: string;
    name: string;
    copy: string;
    features: string[];
    options1?: string[];
    options2?: string[];
    guarantee?: string;
}

interface ProductProps {
    productProps: Product;
    stores: StoreAvailability[];
    option1Title?: string;
    option2Title?: string;
}

const ProductModalEletro = forwardRef<HTMLButtonElement, ProductProps>(
    (
        {
            productProps,
            stores,
            option1Title,
            option2Title,
        },
        ref
    ) => {
        const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
        const [showWhereToBuyModal, setShowWhereToBuyModal] = useState(false);

        // Opções iniciais
        const initialOption1 = productProps.options1?.[0] || '';
        const initialOption2 = productProps.options2?.[0] || '';

        const [selectedOptions, setSelectedOptions] = useState<{
            options1?: string;
            options2?: string;
        }>({
            options1: initialOption1,
            options2: initialOption2,
        });

        const [currentStores, setCurrentStores] = useState<Store[]>([]);

        // Atualiza as lojas ao mudar as opções selecionadas
        useEffect(() => {
            const matchingAvailability = stores.find(storeAvailability => {
                const options = storeAvailability.options;

                // Lógica de correspondência exata (AND)
                return (
                    options.options1 === selectedOptions.options1 &&
                    options.options2 === selectedOptions.options2
                );
            });

            setCurrentStores(matchingAvailability?.stores || []);
        }, [selectedOptions, stores]);

        // Função para abrir o modal "Onde Comprar"
        const openWhereToBuyModal = () => {
            setShowWhereToBuyModal(true);
            if (ref && typeof ref !== 'function' && ref?.current) {
                ref.current.click();
            }
            document.body.style.overflow = "hidden";
        };

        // Função para fechar o modal "Onde Comprar"
        const closeWhereToBuyModal = () => {
            setShowWhereToBuyModal(false);
            document.body.style.overflow = "";
        };

        // Função para atualizar as opções selecionadas
        const handleOptionChange = (
            optionType: 'options1' | 'options2',
            optionValue: string
        ) => {
            setSelectedOptions(prevOptions => ({
                ...prevOptions,
                [optionType]: optionValue,
            }));
        };

        // Função para renderizar as opções dinamicamente com títulos
        const renderOptions = () => (
            <>
                {productProps.options1 && (
                    <div className="flex items-center gap-2 mt-3 lg:mt-0">
                        <h4 className="text-xl whitespace-nowrap">{option1Title}</h4>
                        <div className="flex gap-2">
                            {productProps.options1.map((option1, index) => (
                                <span
                                    key={index}
                                    className={`text-lg border border-gray-400 text-gray-500 px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                                        selectedOptions.options1 === option1
                                            ? 'bg-hisense text-white border-hisense'
                                            : ''
                                    }`}
                                    onClick={() => handleOptionChange('options1', option1)}
                                >
                                    {option1}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {productProps.options2 && (
                    <div className="flex items-center gap-2 mt-3 lg:mt-0">
                        <h4 className="text-xl whitespace-nowrap">{option2Title}</h4>
                        <div className="flex gap-2">
                            {productProps.options2.map((option2, index) => (
                                <span
                                    key={index}
                                    className={`text-lg border border-gray-400 text-gray-500 px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                                        selectedOptions.options2 === option2
                                            ? 'bg-hisense text-white border-hisense'
                                            : ''
                                    }`}
                                    onClick={() => handleOptionChange('options2', option2)}
                                >
                                    {option2}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </>
        );

        return (
            <>
                <section className="px-3 lg:px-0 pb-16">
                    <div className="grid md:grid-cols-2 items-center max-w-[1250px] mx-auto py-10 gap-10">
                        <div className="px-3 w-[90vw] md:w-auto">
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
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="product-swiper2"
                            >
                                {productProps.productImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <Image className="cursor-pointer max-h-[80px] object-cover" src={image} alt="" width={252} height={32} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="lg:ps-16 ps-2">
                            <div>
                                {productProps.technologyImage && (
                                    <div>
                                        <Image className="max-w-[200px]" src={productProps.technologyImage} alt="" width={252} height={32} />
                                    </div>
                                )}
                                <h2 className="text-3xl font-bold mt-6 mb-3">{productProps.name}</h2>
                                <span className="text-gray-600 text-xl">{productProps.copy}</span>
                            </div>
                            <div className="bg-gray-100 rounded-2xl px-3 py-6 my-4 max-w-[98%] lg:max-w-[300px]">
                                <ul className="text-gray-600 text-sm list-disc ps-7 flex flex-col gap-2">
                                    {productProps.features.map((feature, index) =>
                                        <li key={index}>{feature}</li>
                                    )}
                                </ul>
                            </div>

                            {/* Renderiza as opções dinamicamente */}
                            <div className="text-gray-600 gap-4 mt-5 flex flex-col">
                                {renderOptions()}
                            </div>

                            {productProps.guarantee && (
                                <div className="mt-4">
                                    <p className="text-gray-600">{productProps.guarantee}</p>
                                </div>
                            )}

                            {/* Botões "Comprar" e "Especificações Técnicas" */}
                            <div className="mt-8 flex gap-2">
                                {/* Botão Comprar */}
                                <button
                                    ref={ref}
                                    type="button"
                                    className="flex items-center justify-center w-full lg:w-auto text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl"
                                    onClick={openWhereToBuyModal}
                                >
                                    Comprar
                                </button>
                                {/* Botão Especificações Técnicas Estilizado como Link */}
                                <Link href="#specifications" className="flex items-center justify-center w-full lg:w-auto text-md border border-gray-400 transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-gray-500 hover:shadow-xl bg-transparent">
                                    Especificações Técnicas
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modal "Onde Comprar" */}
                {showWhereToBuyModal && (
                    <section>
                        <div className="fixed top-0 w-[80%] md:w-[30%] h-screen bg-gray-50 z-[60] duration-300 right-0 overflow-y-auto">
                            <nav className="h-full w-full p-5">
                                <button
                                    className="absolute text-gray-400 top-7 right-4 text-2xl rounded-full border border-gray-400"
                                    onClick={closeWhereToBuyModal}
                                >
                                    <IoClose />
                                </button>
                                <div>
                                    <Image src={productProps.productImages[0]} alt={productProps.name} width={252} height={32} />
                                </div>
                                <div className="mt-5 px-3">
                                    <h4 className="text-2xl font-bold">{productProps.name}</h4>
                                    {/* Exibe as opções selecionadas no modal */}
                                    <p className="text-gray-600 text-xl mb-4">
                                        Opções selecionadas:
                                        {selectedOptions.options1 && <strong> {selectedOptions.options1}</strong>}
                                        {selectedOptions.options2 && <strong> {selectedOptions.options2}</strong>}
                                    </p>

                                    {/* Seção para trocar entre as opções dinamicamente dentro do modal */}
                                    <div className="text-gray-600 mt-5 flex flex-col gap-4">
                                        {renderOptions()}
                                    </div>

                                    <p className="mt-8 pb-3 border-b border-gray-200">Disponível agora em:</p>
                                    <ul>
                                        {currentStores.length > 0 ? (
                                            currentStores.map((store, index) => (
                                                <li key={index} className="flex justify-between items-center py-5 border-b border-gray-200">
                                                    <Image src={store.logo} alt={store.name} width={132} height={32} />
                                                    <a href={store.link} target="_blank" rel="noopener noreferrer">
                                                        <button
                                                            type="button"
                                                            className="text-sm bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl"
                                                        >
                                                            Comprar
                                                        </button>
                                                    </a>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="py-5 text-gray-500">Em breve lojas disponíveis</li>
                                        )}
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        {/* Overlay */}
                        <div className="overlay absolute top-0 w-screen h-[50000px] bg-dark bg-opacity-70 z-50 lg:z-[51]" onClick={closeWhereToBuyModal}></div>
                    </section>
                )}
            </>
        );
    });

ProductModalEletro.displayName = 'ProductModalEletro';

export default ProductModalEletro;
