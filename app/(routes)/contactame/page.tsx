import TransitionPage from "@/components/transition-page";
import { dataPerfil } from "@/data";

const ContactMe = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-lvh">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Contactame
          <span className="block font-bold text-secondary"> con migo</span>
        </h1>
        <div className="flex items-center justify-center">
          <div>
            {dataPerfil.map((perfil) => (
              <div
                key={perfil.id}
                className="max-w-sm p-6 mx-auto mb-6 bg-white rounded-lg shadow-md"
              >
                <img
                  src={perfil.imageUrl}
                  alt={perfil.name}
                  className="mx-auto mb-4 rounded-full w-28 h-28"
                />
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  {perfil.name}
                </h2>
                <p className="mt-2 text-gray-600 text-center">
                  {perfil.description}
                </p>
                <a
                  href={`mailto:${perfil.correo}`}
                  className="block mt-4 text-secondary text-center"
                >
                  {perfil.correo}
                </a>
                <div className="flex justify-center mt-2">
                  <a href={perfil.UrlCv}>
                    <button className="px-4 py-2 text-white bg-secondary rounded hover:bg-secondary/60">
                      Ver CV
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
