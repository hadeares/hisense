import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Iluminau8n = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (section && image) {

      gsap.to(image, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto bg-dark overflow-hidden parallax-image">
      <div className="w-full h-full relative">
        {/* Imagem de fundo desktop com efeito de parallax */}
        <div ref={imageRef} className="">
          <Image
            className="h-full w-full object-cover opacity-40 hidden md:block"
            src="/U8N/mini-led-2.png"
            alt="Imagem key visual da televisão U8N"
            width={1920}
            height={1080}
            quality={100}
          />
        </div>

        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: 1.03,
          }}
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 left-0 hidden md:block"
        >
          <Image
            src="/U8N/mini-led-1.png"
            alt=""
            width={1920}
            height={1080}
            quality={100}
          />
        </motion.div>

        {/* Versão mobile */}
        <Image
          className="h-full w-full object-cover opacity-40 md:hidden"
          src="/U8N/mini-led-2-mobile.png"
          alt="Imagem key visual da televisão U8N"
          width={1920}
          height={1080}
          quality={100}
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 left-0 md:hidden"
        >
          <Image
            src="/U8N/mini-led-1-mobile.png"
            alt=""
            width={1920}
            height={1080}
            quality={100}
          />
        </motion.div>

        <div className="lg:absolute bottom-[5%] left-[17%] max-w-[600px] px-3 py-20 lg:p-0">
          <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
            A revolução da luz
          </h4>
          <p className="text-gray-300 text-md">
            Abrace a elegância do puro e verdadeiro e do brilho das estrelas. O Mini-LED PRO cria uma incomparável dança das sombras, mostrando todas as tonalidades, desde a luz solar intensa até um preto profundo. As cenas são renderizadas com elegância, permitindo que o jogo de luzes e sombras encante você a cada momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Iluminau8n;
