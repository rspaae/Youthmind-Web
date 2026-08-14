import dynamic from "next/dynamic";
import HeroScene from "@/components/story/scenes/HeroScene";
import SceneAbout from "@/components/story/scenes/SceneAbout";

// Dynamically import below-fold heavy scenes to reduce initial JS bundle + DOM size
const ScenePartners = dynamic(() => import("@/components/story/scenes/ScenePartners"));
const SceneVision = dynamic(() => import("@/components/story/scenes/SceneVision"));
const SceneMission = dynamic(() => import("@/components/story/scenes/SceneMission"));
const SceneBeginning = dynamic(() => import("@/components/story/scenes/SceneBeginning"));
const ScenePhilosophy = dynamic(() => import("@/components/story/scenes/ScenePhilosophy"));
const SceneChallenge = dynamic(() => import("@/components/story/scenes/SceneChallenge"));
const SceneSolution = dynamic(() => import("@/components/story/scenes/SceneSolution"));
const SceneJourney = dynamic(() => import("@/components/story/scenes/SceneJourney"));
const ScenePeople = dynamic(() => import("@/components/story/scenes/ScenePeople"));
const SceneNews = dynamic(() => import("@/components/story/scenes/SceneNews"));
const SceneFinal = dynamic(() => import("@/components/story/scenes/SceneFinal"));

export default function Home() {
  return (
    <>
      {/* Above-fold: loaded immediately */}
      <HeroScene />
      <SceneAbout />
      {/* Below-fold: lazy-loaded to cut initial JS & DOM */}
      <ScenePartners />
      <SceneVision />
      <SceneMission />
      <SceneBeginning />
      <ScenePhilosophy />
      <SceneChallenge />
      <SceneSolution />
      <SceneJourney />
      <ScenePeople />
      <SceneNews />
      <SceneFinal />
    </>
  );
}
