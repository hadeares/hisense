import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MyAnimatedSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const tvRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const tvs = tvRef.current;
    const smoke = smokeRef.current;
    const text = textRef.current;
    const reflection = reflectionRef.current;

    gsap.fromTo(
      bg,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8, // Animação mais rápida
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      text,
      { opacity: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2, // Animação mais rápida
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 1%', // Alterado para começar antes da "smoke"
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      tvs,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8, // Animação mais rápida
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 40%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      smoke,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8, // Animação mais rápida
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 30%', // Smoke começa após o text
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      reflection,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8, // Animação mais rápida
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 10%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen z-[2]">

      <div className="absolute top-[10%] w-full">
        <h4 className='text-4xl lg:text-6xl font-bold text-center px-20'>Bilhão de tons de cores vivas</h4>
      </div>

      {/* Background */}
      <div ref={bgRef} className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/Q6_Layer1_BG.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>

      {/* TVs */}
      <div ref={tvRef} className="absolute w-full h-full flex justify-center items-center z-10">
        <Image
          src="/Q6_Layer4_TVs.png"
          alt="TVs"
          width={1600}
          height={600}
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </div>

      {/* Smoke */}
      <div ref={smokeRef} className="absolute w-full h-full flex justify-center items-center z-20">
        <Image
          src="/Q6_Layer3_Fumaça.png"
          alt="Smoke"
          width={1600}
          height={600}
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </div>

      {/* Text */}
      <div ref={textRef} className="absolute w-full h-full flex justify-center items-center z-30">
        <Image
          src="/Q6_Layer5_Texto.png"
          alt="Text"
          width={1600}
          height={600}
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </div>

      {/* Reflection */}
      <div ref={reflectionRef} className="absolute w-full h-full flex justify-center items-center z-40">
        <Image
          src="/Q6_Layer2_Reflexo.png"
          alt="Reflection"
          width={1600}
          height={600}
          style={{ objectFit: 'contain' }}
          quality={100}
        />
      </div>
    </section>
  );
};

export default MyAnimatedSection;
