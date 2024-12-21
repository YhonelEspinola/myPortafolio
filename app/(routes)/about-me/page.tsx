import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Conoce un {``}
          <span className="font-bol text-secondary">poco más de mi</span>
        </h1>

        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default AboutMe;
