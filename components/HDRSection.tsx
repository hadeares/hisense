import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HDRSection = () => {
  const sectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animating the images and text
    gsap.fromTo(
      leftImageRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      rightImageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-auto py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/HDR-BG.png')` }}
    >
      {/* Centered Title and Description */}
      <div ref={textRef} className="text-center max-w-[1250px] mx-auto mb-10">
        <h2 className="text-black font-bold" style={{
          fontFamily: 'Hisense Alfabet',
          fontSize: '48px',
          fontWeight: '400',
          lineHeight: '52.8px',
          textAlign: 'center'
        }}>
          Ver o conteúdo com detalhes deslumbrantes
        </h2>
        <p className="text-gray-600 mt-4" style={{
          fontFamily: 'Hisense Alfabet',
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '28px',
          letterSpacing: '-0.02em',
          textAlign: 'center'
        }}>
          A Hisense TV traz o decodificador HDR10 +. Você pode acompanhar o conteúdo mais recente ou simplesmente aproveitar algum tempo dos seus jogos favoritos, esta TV oferece conteúdo original com os melhores detalhes de sombreamento e realces mais brilhantes.
        </p>
      </div>

      {/* Adjusting Image Positioning */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 mx-auto max-w-[1250px]">
        <div className="flex flex-col gap-4">
          <Image
            ref={leftImageRef}
            src="/HDR-Sem.png"
            alt="HDR Sem"
            width={500}
            height={300}
            className="w-full max-w-md"
            quality={100}
          />
          <Image
            ref={leftImageRef}
            src="/HDR-Com.png"
            alt="HDR Com"
            width={500}
            height={300}
            className="w-full max-w-md"
            quality={100}
          />
        </div>
        <Image
          ref={rightImageRef}
          src="/HDR-recorte.png"
          alt="HDR Recorte"
          width={600}
          height={600}
          className="w-full max-w-lg"
          quality={100}
        />
      </div>
    </section>
  );
};

export default HDRSection;
