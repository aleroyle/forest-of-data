import { type ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./Scene.module.css";

interface SceneProps {
  children: ReactNode;
  image: string;
  alt: string;
  id: string;
  /** Optional dark overlay opacity for crisis scenes (0-1) */
  overlayOpacity?: number;
}

export default function Scene({
  children,
  image,
  alt,
  id,
  overlayOpacity,
}: SceneProps) {
  return (
    <section className={styles.scene} id={id}>
      <img src={image} alt={alt} className={styles.bg} />
      {overlayOpacity != null && overlayOpacity > 0 && (
        <div
          className={styles.overlay}
          style={{ opacity: overlayOpacity }}
        />
      )}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
