import SkillsTree from "@/components/SkillsTree";
import Image from "next/image";
import StarSVG from "@/components/Star";

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
      className="max-md:flex-wrap flex rounded-md px-6 py-4 gap-4 flex-1"
    >
      <div
        id="left-side"
        className="max-md:w-full flex flex-col gap-3 pr-4 w-2/6 max-md:items-center"
      >
        <Image
          src="./gist-logo.webp"
          alt="company-logo"
          width={250}
          height={250}
        />
        <div id="role-description" className="">
          <h2 className="text-gray-400 font-bold text-xl">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 font-medium">10.03.23 - 12.10.24</p>
        </div>
        <div
          id="test-wrapper"
          className="w-full h-full flex items-center justify-start max-md:justify-center max-md:my-3"
        >
          <SkillsTree skills={skills} size={300} spin={true} />
        </div>
      </div>
      <div
        id="right-side"
        className="max-md:w-full flex-1 flex flex-col gap-4 items-center justify-start"
      >
        <ul className="text-2xl flex flex-col gap-6 font-bebas">
          <li className="flex items-start gap-3">
            <StarSVG className="text-amber-300 w-8 h-8 min-w-8 min-h-8" />
            <p>
              Worked as a{" "}
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                fullstack developer
              </span>{" "}
              on GistMed, a comprehensive digital health platform that enables
              hospitals and patients to collaborate and track treatment plans in
              real time, ensuring transparency and continuity of care across
              various touchpoints.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <StarSVG className="text-amber-300 w-8 h-8 min-w-8 min-h-8" />

            <p>
              Developed intuitive and scalable interfaces for hospital staff,
              allowing them to monitor patient status, manage clinical
              documentation, and coordinate care activities efficiently across
              departments.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <StarSVG className="text-amber-300 w-8 h-8 min-w-8 min-h-8" />

            <p>
              Created mobile-optimized, interactive patient-facing screens that
              guide users through dynamic, condition-specific questionnaires,
              improving the accuracy and completeness of health data collection.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <StarSVG className="text-amber-300 w-8 h-8 min-w-8 min-h-8" />
            <p>
              Designed and implemented a personalized video generation system
              that composes animated educational videos on the fly, combining
              pre-recorded segments based on each patient’s questionnaire
              responses, enhancing understanding and engagement.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <StarSVG className="text-amber-300 w-8 h-8 min-w-8 min-h-8" />
            <p>
              Built and integrated a suite of tools for printing, digitally
              signing, and tracking critical documents, enabling seamless and
              compliant communication between medical professionals and patients
              throughout the care cycle.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ExperienceItem;
