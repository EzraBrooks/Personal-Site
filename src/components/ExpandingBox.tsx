import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const ExpandingBox: React.FC<{}> = () => {
  const [expanded, setExpanded] = useState(false);
  const divRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  return (
    <motion.div
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
        backgroundColor: "black",
        position: "relative"
      }}
      initial={false}
      positionTransition
    ></motion.div>
  );
};

export default ExpandingBox;
