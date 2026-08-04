import HeroScene from "@/components/story/scenes/HeroScene";
import SceneBeginning from "@/components/story/scenes/SceneBeginning";
import ScenePhilosophy from "@/components/story/scenes/ScenePhilosophy";
import SceneChallenge from "@/components/story/scenes/SceneChallenge";
import SceneSolution from "@/components/story/scenes/SceneSolution";
import SceneJourney from "@/components/story/scenes/SceneJourney";
import ScenePeople from "@/components/story/scenes/ScenePeople";
import SceneFinal from "@/components/story/scenes/SceneFinal";

export default function Home() {
  return (
    <>
      <HeroScene />
      <SceneBeginning />
      <ScenePhilosophy />
      <SceneChallenge />
      <SceneSolution />
      <SceneJourney />
      <ScenePeople />
      <SceneFinal />
    </>
  );
}
