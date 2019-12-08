import { motion } from "framer-motion";
import React, { useState } from "react";

const ExpandingBox: React.FC<{}> = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      onClick={() => setExpanded(!expanded)}
      animate={{
        width: expanded ? "100vw" : 192,
        height: expanded ? "100vh" : 192,
        position: expanded ? "absolute" : "relative",
        top: 0,
        left: 0
      }}
      style={{
        backgroundColor: "black"
      }}
      initial={false}
      positionTransition
    ></motion.div>
  );
};

export default ExpandingBox;
