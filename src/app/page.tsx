import ScreenWrapper from "@/components/ScreenWrapper";
import Contact from "@/sections/contact/Contact";
import GradientDivider from "@/sections/experience/components/GradientDivider";
import Experience from "@/sections/experience/Experience";
import Profile from "@/sections/profile/Profile";
import Projects from "@/sections/projects/Projects";

export default function Home() {
  return (
    <>
      <ScreenWrapper>
        <Profile />
      </ScreenWrapper>

      <GradientDivider />

      <ScreenWrapper>
        <Experience />
      </ScreenWrapper>

      <GradientDivider />

      <ScreenWrapper>
        <Projects />
      </ScreenWrapper>

      <GradientDivider />

      <ScreenWrapper>
        <Contact />
      </ScreenWrapper>
    </>
  );
}
