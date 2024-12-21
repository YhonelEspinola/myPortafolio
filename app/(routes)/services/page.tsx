import SliderTecnologias from "@/components/slider-tecnologias";
import TransitionPage from "@/components/transition-page";

const ServicePage = () => {
  return (
    <>
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            <span className="font-bold text-secondary"> Tecnologias.</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            A lo largo de mis estudios, he explorado y aprendido diversas
            tecnologías. Algunas las he desarrollado a profundidad, mientras que
            en otras me he quedado con un conocimiento más básico.
          </p>
          <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
            Contacta conmigo
          </button>
        </div>

        <div>
          <SliderTecnologias />
        </div>
      </div>
    </>
  );
};

export default ServicePage;
