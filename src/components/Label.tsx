import { motion } from "framer-motion";
import styles from "./Label.module.css";

interface LabelProps {
  /** The technical platform concept */
  text: string;
  /** Position as percentage from top-left of the scene */
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Light variant for dark scenes */
  variant?: "dark" | "light";
}

export default function Label({
  text,
  top,
  bottom,
  left,
  right,
  delay = 0,
  variant = "dark",
}: LabelProps) {
  return (
    <motion.div
      className={`${styles.label} ${styles[variant]}`}
      style={{ top, bottom, left, right }}
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "backOut", delay }}
      viewport={{ amount: 0.3 }}
    >
      <span className={styles.dot} />
      {text}
    </motion.div>
  );
}
