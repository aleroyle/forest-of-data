import Scene from "../components/Scene";
import Narrative from "../components/Narrative";

export default function Scene09Ready() {
  return (
    <Scene
      image="/forest-of-data/images/scene-09.jpg"
      alt="A thriving, well-organised forest with treehouses, clear river, and happy animals"
      id="scene-9"
    >
      <Narrative position="top-left" splash="green" as="h2" delay={0.3} wide>
        Now the forest is ready. Strong pipelines, governed access, a shared semantic layer — a solid foundation for any AI application you want to build.
      </Narrative>
    </Scene>
  );
}
