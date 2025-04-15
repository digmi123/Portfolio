import ScreenWrapper from "@/_components/ScreenWrapper";
import Experience from "@/_sections/experience/Experience";
import Profile from "@/_sections/profile/Profile";
import Projects from "@/_sections/projects/Projects";

export default function Home() {
  return (
    <>
      <ScreenWrapper>
        <Profile />
      </ScreenWrapper>

      <ScreenWrapper>
        <Experience />
      </ScreenWrapper>

      <ScreenWrapper>
        <Projects />
      </ScreenWrapper>
    </>
  );
}
