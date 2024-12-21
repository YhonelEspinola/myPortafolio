"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image src="/PeY.png" priority width="800" height="800" alt="Avatar" />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            hola soy, <br />
            <TypeAnimation
              sequence={[
                "Osmer",
                1000,
                "Yhonel",
                1000,
                "Espinola",
                1000,
                "Narcizo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
            Soy un joven apasionado por la tecnología, con conocimientos tanto
            en desarrollo backend como frontend. Sin embargo, lo que más ha
            captado mi interés en este fascinante mundo es el desarrollo de
            aplicaciones móviles para Android utilizando Kotlin. Disfruto
            enfrentar nuevos retos y mejorar continuamente mis habilidades para
            crear soluciones innovadoras y funcionales.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/portfolio"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            <a
              href="/contactame"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
