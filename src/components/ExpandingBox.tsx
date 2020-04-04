import { motion, MotionProps } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";

export interface ExpandingBoxProps extends MotionProps {
  fullscreenContent?: React.ReactNode;
  height?: string;
  width?: string;
  expandedHeight?: string;
  expandedWidth?: string;
  imageSrc: string;
}

const HeaderImage = styled.img`
  object-fit: cover;
  width: inherit;
  height: inherit;
`;

const ExpandingBox: React.FC<ExpandingBoxProps> = ({
  children,
  fullscreenContent,
  height = "192px",
  width = "192px",
  expandedHeight = "100vh",
  expandedWidth = "100vw",
  imageSrc,
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
        width: expanded ? expandedWidth : width,
        height: expanded ? expandedHeight : height,
      }}
      transition={{ duration: 0.25 }}
      style={{
        position: expanded ? "absolute" : "relative",
        marginLeft: expanded ? `calc(calc(100vw - ${expandedWidth}) / 2)` : 0,
        marginRight: expanded ? `calc(calc(100vw - ${expandedWidth}) / 2)` : 0,
        overflow: "auto",
        top: 0,
        left: 0,
      }}
      initial={false}
      positionTransition
    >
      <HeaderImage
        src={imageSrc}
        style={{ height: expanded ? "auto" : undefined }}
      />
      {expanded && fullscreenContent ? fullscreenContent : children}
    </motion.div>
  );
};

export default ExpandingBox;
