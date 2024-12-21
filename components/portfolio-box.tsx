import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    description: string;
    urlGithub: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, description, urlGithub } = data;

  return (
    <div key={id} className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt="Image"
        width={150}
        height={150}
        className="w-full md:w-[150px] rounded-2xl h-auto"
      />
      <p className="mt-2">{description}</p>
      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/60"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
