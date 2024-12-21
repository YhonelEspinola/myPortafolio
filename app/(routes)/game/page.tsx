import GamesPlayer from "@/components/games";

const PagePage = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r ">
        <div className="relative w-[500px] h-[500px] bg-gray-900 p-6 rounded-3xl shadow-2xl flex flex-col items-center">
          <h1 className="text-white text-xl font-extrabold text-center mb-6 animate-bounce">
            <span className="text-secondary">Interactua</span> con migo
          </h1>

          <div className="w-full h-full bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-inner overflow-hidden">
            <GamesPlayer />
          </div>
        </div>
      </div>
    </>
  );
};

export default PagePage;
