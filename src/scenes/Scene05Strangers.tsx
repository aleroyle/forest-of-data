import Scene from "../components/Scene";
import Narrative from "../components/Narrative";
import Label from "../components/Label";

export default function Scene05Strangers() {
  return (
    <Scene
      image="/forest-of-data/images/scene-05.jpg"
      alt="Raccoons crawling through a broken fence toward a glowing berry bush"
      id="scene-5"
    >
      {/* Raccoons sneaking through — right side to avoid left narrative */}
      <Label text="unaudited access" top="55%" right="5%" delay={0.5} />
      {/* Glowing berry bush — centre of image */}
      <Label text="PII data" top="42%" left="52%" delay={0.7} />

      <Narrative position="left" splash="amber" delay={0.3}>
        And some let strangers wander in. Without policy tags, anyone could reach tables full of PII — even when they didn&rsquo;t need it. No one centrally could see who had access, or when it was granted.
      </Narrative>
    </Scene>
  );
}
