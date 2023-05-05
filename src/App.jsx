import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  
  const video = useRef();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let setStoreScrollPos = latest * 26.5333
    if (video.current != undefined) {
      video.current.currentTime = setStoreScrollPos
    }
  })

  return (
    <>
      <div className="scroll-spacer"></div>
      <video ref={video}>
        <source src="/0001-1592.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
