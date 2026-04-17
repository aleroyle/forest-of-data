import Scene from "../components/Scene";
import Narrative from "../components/Narrative";

export default function Scene01Forest() {
  return (
    <Scene
      image="/forest-of-data/images/scene-01.jpg"
      alt="A lush magical forest with animals and a gentle river"
      id="scene-1"
    >
      <Narrative position="right" splash="teal" as="h1">
        Deep in OVO, there is a forest. Every team draws from it — clean water, strong roots, rich soil. But not everyone knows what keeps it alive.
      </Narrative>
    </Scene>
  );
}
