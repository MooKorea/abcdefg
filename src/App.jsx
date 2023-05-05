import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  const video = useRef();
  const videoDuration = 26.5333;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (video.current === undefined) return;
    video.current.currentTime = latest * videoDuration;
  });

  return (
    <>
      <div className="scroll-spacer"></div>
      <video ref={video}>
        <source src="/V20001-1592.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
