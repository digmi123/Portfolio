import Image from "next/image";

function ExperienceItem() {
  return (
    <div
      id="experience-item"
      // bg-radial-[at_0%_0%] from-white to-zinc-900 to-75%
      className="flex rounded-md px-6 py-6 shadow-card shadow-[#777777]"
    >
      <div
        id="left-side"
        className="flex flex-col gap-3 border-r-1 border-[#d7d7d7BF] pr-4"
      >
        <Image
          src="/gist-logo.webp"
          alt="company-logo"
          width={250}
          height={200}
        />
        <div id="role-description" className="">
          <h2 className="text-gray-400 font-bold text-xl">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 font-medium">10.03.23 - 12.10.24</p>
        </div>
        <div id="technologies" className="flex items-center gap-4">
          <Image
            src="/react.svg"
            alt="technology"
            width={30}
            height={30}
            className="rounded-full aspect-square object-cover"
          />
          <Image
            src="/nodejs.svg"
            alt="technology"
            width={30}
            height={30}
            className="rounded-full aspect-square object-cover"
          />
          <Image
            src="/gcp.svg"
            alt="technology"
            width={30}
            height={30}
            className="rounded-full aspect-square object-cover"
          />
        </div>
      </div>
      {/* <hr id="divider" className="w-[1px] h-full bg-black" /> */}
      <div id="right-side" className="flex-1">
        <p className="px-10 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          quisquam reprehenderit natus accusamus harum necessitatibus quidem
          ipsam, sapiente, quibusdam quae deserunt omnis minima. Quisquam
          deleniti consequatur nostrum cum, omnis consequuntur! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Debitis, tenetur. Ad,
          sunt? Fugiat corrupti at eveniet aspernatur magni, dolore pariatur
          dicta, voluptate aut corporis hic eius officiis sint ipsa dolor.
        </p>
      </div>
    </div>
  );
}
export default ExperienceItem;
