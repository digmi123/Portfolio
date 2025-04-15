import Image from "next/image";
import GeneralCard from "./GeneralCard";

interface ExperienceCardProps {
  title: string;
  image: string;
  text: string;
  date?: string;
}

function ExperienceCard({ title, image, text, date }: ExperienceCardProps) {
  return (
    <GeneralCard>
      <div id="top">
        <Image
          src={image}
          alt="card-image"
          width={80}
          height={80}
          className="w-full"
        />
        <p className="text-gray-400 font-bold py-4">10.03.23 - 12.10.24</p>
      </div>

      <div id="footer" className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit
        omnis soluta, minus, quae reprehenderit officia dolorum vel laudantium
        ex natus vero? Accusamus eum voluptates earum quidem saepe recusandae
        possimus.
      </div>
    </GeneralCard>
  );
}

export default ExperienceCard;
