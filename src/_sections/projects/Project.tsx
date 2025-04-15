import Image from "next/image";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
}

function Project({ name, description, image }: ProjectProps) {
  return (
    <div id="project" className="flex items-center justify-between gap-4">
      <div id="content" className="max-w-[50%] flex flex-col gap-6">
        <h2 id="project-name" className="text-2xl tracking-wide">
          {name}
        </h2>
        <p id="project-desc" className="text-lg">
          {description}
        </p>
        <div id="buttons" className="flex items-center gap-4">
          <button className="p-2 text-xl font-bold border rounded-md flex items-center gap-2">
            <Image src="./github.svg" alt="github" width={30} height={30} />
            <p>VISIT GITHUB</p>
          </button>
        </div>
      </div>

      <Image
        src={image}
        alt="Project"
        width={600}
        height={300}
        className="rounded-md"
      />
    </div>
  );
}

export default Project;
