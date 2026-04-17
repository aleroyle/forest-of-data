import Scene from "../components/Scene";
import Narrative from "../components/Narrative";

export default function Scene03Building() {
  return (
    <Scene
      image="/forest-of-data/images/scene-03.jpg"
      alt="Animals building treehouses and workshops in the forest canopy"
      id="scene-3"
    >
      <Narrative position="top-left" splash="teal" delay={0.3}>
        The animals built wonderful things in the forest. Conversational AIs, ML models, dashboards, automations — all drawing from the same roots beneath their feet.
      </Narrative>
    </Scene>
  );
}
