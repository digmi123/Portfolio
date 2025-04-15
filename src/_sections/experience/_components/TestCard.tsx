import Image from "next/image";
import GeneralCard from "./GeneralCard";

function TestCard() {
  return (
    <GeneralCard>
      <div id="top" className="flex items-center justify-between gap-4 ">
        <div id="left" className="flex flex-col gap-1">
          <h2 id="title" className="text-2xl font-bold text-foreground">
            MakUp
          </h2>
          <div className="flex items-center gap-4">
            {["React", "Node.js"].map((tech, index) => {
              return (
                <p key={`${tech}-${index}`} className="text-gray-400">
                  {tech}
                </p>
              );
            })}
          </div>
        </div>
        <div id="right" className="">
          <Image src="./github.svg" alt="github-logo" width={60} height={60} />
        </div>
      </div>

      <div id="footer" className="p-2">
        <p className="text-text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit
          omnis soluta, minus, quae reprehenderit officia dolorum vel laudantium
          ex natus vero? Accusamus eum voluptates earum quidem saepe recusandae
          possimus.
        </p>
      </div>
    </GeneralCard>
  );
}

export default TestCard;
