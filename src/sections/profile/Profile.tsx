import Image from "next/image";
import adir from "../../../public/adir.jpeg";
import SkillsTree from "@/components/SkillsTree";
import gmail from "../../../public/gmail.svg";
import linkedin from "../../../public/linkedin.svg";
import github from "../../../public/github.svg";
import Link from "next/link";

const skills = [
  { name: "css", path: "./css.svg" },
  { name: "html", path: "./html.svg" },
  { name: "javascript", path: "./javascript.svg" },
  { name: "react", path: "./react.svg" },
  { name: "nodejs", path: "./nodejs.svg" },
  { name: "nextjs", path: "./nextjs.svg" },
  { name: "vue", path: "./vue.svg" },
  { name: "postgres", path: "./postgres.svg" },
  { name: "gcp", path: "./gcp.svg" },
];

function Profile() {
  return (
    <div id="profile-section" className="max-md:flex-wrap h-full flex gap-4">
      <div id="left-side" className="max-md:w-full w-2/4 flex flex-col gap-6">
        <div
          id="top-details"
          className="flex items-center gap-8 flex-wrap max-md:justify-center"
        >
          <Image
            src={adir}
            alt="profile picture"
            width={300}
            height={300}
            className="rounded-full aspect-square object-cover max-md:w-[200px] max-md:h-[200px]"
          />
          <div id="my-details">
            <div
              id="profile-desc"
              className="bg-linear-to-r from-slate-200 to-gray-500 bg-clip-text text-transparent max-md:text-center flex flex-col gap-2"
            >
              <h2 id="name" className="text-4xl font-medium">
                Adir Digmi
              </h2>
              <p id="job-title" className="text-2xl">
                Full Stack Developer
              </p>
              <div className="flex gap-4 items-center justify-center">
                <Image
                  width={30}
                  height={30}
                  src="/hit.jpg"
                  alt="HIT-logo"
                  className="rounded-md"
                />
                <p className="text-gray-400 text-md mt-1">
                  B.Sc. in Computer Science, HIT – Holon Institute of Technology
                </p>
              </div>
            </div>

            <div
              id="icons"
              className="flex py-4 gap-3 items-center max-md:justify-center "
            >
              <Link
                href="https://github.com/digmi123"
                target="_blank"
                className="cursor-pointer"
              >
                <Image
                  src={github}
                  alt="profile picture"
                  width={30}
                  height={30}
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/adir-digmi-6a6a8a21b/"
                target="_blank"
                className="cursor-pointer"
              >
                <Image
                  src={linkedin}
                  alt="profile picture"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="mailto:adirdigmi@gmail.com"
                target="_blank"
                className="cursor-pointer"
              >
                <Image
                  src={gmail}
                  alt="profile picture"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-4xl font-bebas italic max-md:text-2xl">
          An experienced web
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-6xl max-md:text-4xl">
            {" "}
            developer{" "}
          </span>
          with expertise in building high performance web applications. A
          collaborative and social learner who thrives in team environments,
          constantly gaining insights from peers to enhance skills and
          solutions. Effective at guiding and inspiring others, achieving
          project goals within tight deadlines, and managing multiple tasks
          without compromising quality.
        </p>
      </div>
      <div id="right-side" className="max-md:w-full w-2/4 flex justify-center">
        <SkillsTree skills={skills} size={350} />
      </div>
    </div>
  );
}

export default Profile;
