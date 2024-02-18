import { useEffect, useRef } from "preact/hooks";
import "./PageProgress.scss";

const TOP_SCROLL_OFFSET = 50;

export const PageProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let progressPath = progressPathRef.current;
    if (!progressPath) {
      return;
    }
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = String(pathLength);
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.transition =
      "stroke-dashoffset 10ms linear";

    let updateProgress = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = winScroll / totalHeight;

      const progress = pathLength - pathLength * scrolled;
      progressPathRef.current!.style.strokeDashoffset = "" + progress;
    };

    let updateProgressVisibility = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > TOP_SCROLL_OFFSET) {
        progressRef.current!.classList.add("active-progress");
      } else {
        progressRef.current!.classList.remove("active-progress");
      }
    };

    document.addEventListener("scroll", updateProgress);
    document.addEventListener("scroll", updateProgressVisibility);
    updateProgress();
    updateProgressVisibility();

    return () => {
      document.removeEventListener("scroll", updateProgress);
      document.removeEventListener("scroll", updateProgressVisibility);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="progress-wrap"
      ref={progressRef}
      onClick={scrollToTop}
      onKeyDown={scrollToTop}
      title="Scroll to top"
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          ref={progressPathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>
    </div>
  );
};
