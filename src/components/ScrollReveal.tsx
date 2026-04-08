import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const ScrollReveal = ({ children, className, delay = 0, direction = "up" }: Props) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 32 : 0,
      x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
