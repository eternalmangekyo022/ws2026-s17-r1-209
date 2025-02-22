import Maximize from "../assets/maximize.svg";
import Minimize from "../assets/minimize.svg";
import Check from "../assets/check.svg";

import Step from "../components/Step";
import PageContext from "../context/page";

import { useContext, useState } from "react";

type Props = {
  articleRef: React.RefObject<HTMLElement | null>;
};

export default function Header({ articleRef }: Props) {
  const [fullScreen, setFullScreen] = useState(false);
  const { page } = useContext(PageContext);

  function toggleFullScreen(): void {
    if (!articleRef) return;
    if (document.fullscreenElement) {
      setFullScreen(false);
      document.exitFullscreen();
    } else {
      articleRef!.current!.requestFullscreen();
      setFullScreen(true);
    }
  }

  return (
    <>
      <header className="header">
        <h1>Register a new location</h1>
        <div className="steps">
          {/* <button className="step done">
            <img src={Check} alt="Check" />
          </button> */}

          {Array.from({ length: 4 }).map((_, i) => (
            <Step key={i} step={i + 1} page={page} />
          ))}
        </div>

        <button onClick={toggleFullScreen} className="fullscreen-btn">
          <img
            src={fullScreen ? Minimize : Maximize}
            alt={fullScreen ? "Minimize" : "Maximize"}
          />
        </button>
      </header>
    </>
  );
}
