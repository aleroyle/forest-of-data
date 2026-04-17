import { type ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./Narrative.module.css";

interface NarrativeProps {
  children: ReactNode;
  /** Position the text block within the scene */
  position?: "centre" | "right" | "left" | "top-centre" | "top-left" | "top-right" | "bottom-centre";
  /** Splash colour — matches the scene mood */
  splash?: "teal" | "green" | "amber" | "slate" | "gold";
  delay?: number;
  as?: "h1" | "h2" | "p";
  /** Wider bubble for longer text */
  wide?: boolean;
  /** Larger text */
  large?: boolean;
}

export default function Narrative({
  children,
  position = "right",
  splash = "teal",
  delay = 0.3,
  as: Tag = "p",
  wide = false,
  large = false,
}: NarrativeProps) {
  return (
    <motion.div
      className={`${styles.container} ${styles[position]} ${wide ? styles.wide : ""} ${large ? styles.large : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ amount: 0.3 }}
    >
      {/* Watercolour splash SVG behind the text */}
      <svg
        className={`${styles.splash} ${styles[`splash_${splash}`]}`}
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 20 Q10 60 30 120 Q15 180 60 230 Q100 280 180 270 Q260 290 330 250 Q390 220 380 150 Q395 80 350 40 Q290 5 200 15 Q120 0 50 20Z"
          fill="currentColor"
        />
      </svg>
      <Tag className={styles.text}>{children}</Tag>
    </motion.div>
  );
}
