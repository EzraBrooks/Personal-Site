import { motion, MotionProps } from "framer-motion";
import React, { useRef, useState } from "react";

export interface ExpandingBoxProps extends MotionProps {
  fullscreenContent?: React.ReactNode;
}

const ExpandingBox: React.FC<ExpandingBoxProps> = ({
  children,
  fullscreenContent,
  ...props
}) => {
  const [expanded, setExpanded] = useState(false);
  const divRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  return (
    <motion.div
      {...props}
      ref={divRef}
      onClick={() => setExpanded(!expanded)}
      animate={{
        width: expanded ? "100vw" : 192,
        height: expanded ? "100vh" : 192,
        top: expanded ? -divRef.current.offsetTop : 0,
        left: expanded ? -divRef.current.offsetLeft : 0
      }}
      transition={{ duration: 0.25 }}
      style={{
        position: "relative"
      }}
      initial={false}
      positionTransition
    >
      {expanded && fullscreenContent ? fullscreenContent : children}
    </motion.div>
  );
};

export default ExpandingBox;
