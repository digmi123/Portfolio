import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

function Project({ name, description, image, link }: ProjectProps) {
  return (
    <div id="project" className="flex gap-8 justify-between flex-wrap">
      <div id="content" className="min-w-1/2 flex-1 flex flex-col gap-8">
        <h2
          id="project-name"
          className="tracking-wide text-4xl font-bold italic"
        >
          {name}
        </h2>
        <p id="project-desc" className="text-2xl font-bebas">
          {description}
        </p>
        <div id="buttons" className="flex items-center gap-4">
          <Link
            className="p-2 text-xl font-bold border rounded-md flex items-center gap-2"
            href={link}
            target="_blank"
          >
            <Image src="./github.svg" alt="github" width={30} height={30} />
            <p>VISIT GITHUB</p>
          </Link>
        </div>
      </div>

      <div id="image-wrapper" className="aspect-video block">
        <Image
          src={image}
          alt="Project"
          width={500}
          height={400}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
}

export default Project;
