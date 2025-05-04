import SkillsTree from "@/_components/SkillsTree";
import Image from "next/image";

const skills = [
  { name: "react", path: "./react.svg" },
  { name: "nodejs", path: "./nodejs.svg" },
  { name: "gcp", path: "./gcp.svg" },
  { name: "redux", path: "./redux.svg" },
  { name: "postgres", path: "./postgres.svg" },
];

function ExperienceItem() {
  return (
    <div
      id="experience-item"
      // bg-radial-[at_0%_0%] from-white to-zinc-900 to-75%
      className="max-md:flex-wrap h-full flex rounded-md px-6 py-6 shadow-card shadow-[#777777]"
    >
      <div
        id="left-side"
        className="max-md:w-full flex flex-col gap-3 pr-4 w-2/6"
      >
        <Image
          src="/gist-logo.webp"
          alt="company-logo"
          width={400}
          height={400}
        />
        <div id="role-description" className="">
          <h2 className="text-gray-400 font-bold text-xl">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 font-medium">10.03.23 - 12.10.24</p>
        </div>
        <div
          id="test-wrapper"
          className="w-full h-full flex items-center justify-center"
        >
          <SkillsTree skills={skills} size={300} spin={true} />
        </div>
      </div>
      <div
        id="right-side"
        className="max-md:w-full flex-1 flex flex-col gap-4 items-center justify-start"
      >
        <ul className="text-xl flex flex-col gap-2 font-medium list-disc pl-5">
          <li>
            Worked as a <strong>fullstack developer</strong> on GistMed, a
            platform for hospitals and patients to manage and track treatment
            processes.
          </li>
          <li>
            Developed <strong>interfaces for hospital staff</strong> to monitor
            patients and manage documentation, and{" "}
            <strong>mobile-friendly screens for patients</strong> to complete
            dynamic questionnaires.
          </li>
          <li>
            Built a system that generates{" "}
            <strong>personalized animated videos</strong> based on patient
            responses by dynamically combining pre-made video segments.
          </li>
          <li>
            Implemented features for{" "}
            <strong>document printing, signing, and tracking</strong>, enabling
            seamless interaction between patients and hospital staff.
          </li>
        </ul>

        <div
          id="image-wrapper"
          className="flex items-center justify-center flex-1 w-full"
        >
          <Image
            src="/trom-hardama.png"
            alt="experience-teaser"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
export default ExperienceItem;
