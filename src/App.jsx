import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  
  const scrub = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 60,
    restDelta: 0.001,
  });
  
  const [storeScrollPos, setStoreScrollPos] = useState();
  useMotionValueEvent(scrub, "change", (latest) => {
    setStoreScrollPos(latest * 26.5333)
  })

  const video = useRef();
  useEffect(() => {
    if (storeScrollPos != undefined) {
      video.current.currentTime = storeScrollPos
    }
  }, [storeScrollPos]);

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
