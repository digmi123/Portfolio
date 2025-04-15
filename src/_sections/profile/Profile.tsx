import Image from "next/image";
import adir from "../../../public/adir.jpeg";
import SkillsTree from "@/_components/SkillsTree";
import gmail from "../../../public/gmail.svg";
import linkedin from "../../../public/linkedin.svg";
import github from "../../../public/github.svg";

function Profile() {
  return (
    <div id="profile-section" className="h-full flex">
      <div id="left-side" className="w-2/4 flex flex-col gap-12">
        <div id="top-details" className="flex items-center gap-8">
          <Image
            src={adir}
            alt="profile picture"
            width={300}
            height={300}
            className="rounded-full aspect-square object-cover"
          />
          <div id="my-details" className="">
            <div
              id="profile-desc"
              className="bg-linear-to-r from-slate-200 to-gray-500 bg-clip-text text-transparent"
            >
              <h2 id="name" className="text-4xl font-medium">
                Adir Digmi
              </h2>
              <p id="job-title" className="text-2xl">
                Full Stack Developer
              </p>
            </div>

            <div id="icons" className="flex py-4 gap-3 items-center">
              <Image
                src={github}
                alt="profile picture"
                width={30}
                height={30}
              />
              <Image
                src={linkedin}
                alt="profile picture"
                width={30}
                height={30}
              />
              <Image src={gmail} alt="profile picture" width={30} height={30} />
            </div>
          </div>
        </div>

        <p className="text-4xl font-bebas italic">
          An experienced web
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-6xl">
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
      <div id="right-side" className="w-2/4 flex justify-center">
        <div className="w-[400px] h-[400px]">
          <SkillsTree />
        </div>
      </div>
    </div>
  );
}

export default Profile;
