import { useRef } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  
  const scrub = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 60,
    restDelta: 0.001,
  });
  
  const video = useRef();
  useMotionValueEvent(scrub, "change", (latest) => {
    let setStoreScrollPos = latest * 26.5333
    if (video.current != undefined) {
      video.current.currentTime = setStoreScrollPos
    }
  })


  return (
    <>
      <div className="scroll-spacer"></div>
      <motion.div className="video">
        <video ref={video}>
          <source src="/0001-1592.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </>
  );
}

export default App;
