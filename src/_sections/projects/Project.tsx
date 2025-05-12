import Image from "next/image";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
}

function Project({ name, description, image }: ProjectProps) {
  return (
    <div id="project" className="flex gap-8 justify-between flex-wrap">
      <div id="content" className="min-w-1/2 flex-1 flex flex-col gap-8">
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
