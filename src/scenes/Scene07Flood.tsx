import Scene from "../components/Scene";
import Narrative from "../components/Narrative";

export default function Scene07Flood() {
  return (
    <Scene
      image="/forest-of-data/images/scene-07.jpg"
      alt="A storm flooding the forest, animals scrambling to higher ground"
      id="scene-7"
      overlayOpacity={0.1}
    >
      <Narrative position="top-centre" splash="slate" delay={0.3}>
        Then the river broke its banks. Data flowed where it shouldn&rsquo;t — PII exposed, governance missing, Ofgem compliance at risk.
      </Narrative>
    </Scene>
  );
}
