"use client";

import { fadeIn } from "@/utils/motion-transitions";
import { motion } from "framer-motion";

export type MotionTransitionProps = {
  children: React.ReactNode;
  className?: string;
  position: "right" | "bottom";
};

//componente reactivo para usar en cualquier sitio
export function MotionTransition(props: MotionTransitionProps) {
  const { children, className, position } = props;

  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}
