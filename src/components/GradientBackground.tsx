import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedGradient: React.FC = () => {
  const props = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...props,
      }}
    >
      {[400, 300, 200, 132].map((size, index) => (
        <animated.div
          key={size}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: `rgba(255, 255, 255, ${0.03 + index * 0.02})`,
            opacity: props.opacity,
            transform: props.scale.to((s) => `scale(${s})`),
          }}
        />
      ))}
    </animated.div>
  );
};

export default AnimatedGradient;
