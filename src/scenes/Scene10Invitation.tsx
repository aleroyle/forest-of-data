import Scene from "../components/Scene";
import Narrative from "../components/Narrative";

export default function Scene10Invitation() {
  return (
    <Scene
      image="/forest-of-data/images/scene-10.jpg"
      alt="Looking up through the forest canopy into golden sunlight"
      id="scene-10"
    >
      <Narrative position="centre" splash="gold" as="h2" delay={0.5} large>
        The roots are strong. The paths are clear. What will you build?
      </Narrative>
    </Scene>
  );
}
