import { motion } from "framer-motion";
import Scene from "../components/Scene";
import Narrative from "../components/Narrative";
import styles from "../components/Narrative.module.css";

export default function Scene06Collapse() {
  return (
    <Scene
      image="/forest-of-data/images/scene-06.jpg"
      alt="A tower collapsing in a dark moonlit forest"
      id="scene-6"
      overlayOpacity={0.15}
    >
      <Narrative position="right" splash="slate" delay={0.3}>
        One night, the tallest tower fell. Bad data quality cascaded downstream — breaking dashboards, corrupting models, and taking other apps with it.
      </Narrative>

      <motion.p
        className={styles.quote}
        style={{ position: "absolute", bottom: "8%", left: "15%", zIndex: 3, fontSize: "1.6rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        viewport={{ once: true }}
      >
        &ldquo;We built too high without looking down.&rdquo;
      </motion.p>
    </Scene>
  );
}
