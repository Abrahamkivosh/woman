export const getAnimationProps = (index: number) => {
  // Define different animations based on index or conditions
  const animations = [
    "fade-up",
    "fade-down",
    "slide-up",
    "slide-down",
    "zoom-in",
    "zoom-out",
  ];

  // Apply different animations based on index
  return {
    animation: animations[index % animations.length],
    delay: `${index * 100}ms`,
  };
};
