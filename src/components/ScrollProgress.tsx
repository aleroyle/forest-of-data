import { motion, useScroll } from "framer-motion";
import styles from "./ScrollProgress.module.css";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.container}>
      <motion.div className={styles.vine} style={{ scaleY: scrollYProgress }} />
      {[0.1, 0.3, 0.5, 0.7, 0.9].map((pos) => (
        <div key={pos} className={styles.leaf} style={{ top: `${pos * 100}%` }}>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <ellipse cx="6" cy="5" rx="5" ry="4" fill="#5B8C5A" />
          </svg>
        </div>
      ))}
    </div>
  );
}
