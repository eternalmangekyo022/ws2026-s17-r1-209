import Maximize from '../assets/maximize.svg'
import Minimize from '../assets/minimize.svg'
import Check from '../assets/check.svg'
import { useState } from 'react'

type Props = {
	articleRef: React.RefObject<HTMLElement | null>
  page: number
}

export default function Header({ articleRef, page }: Props) {
	const [fullScreen, setFullScreen] = useState(false);

	function toggleFullScreen(): void {
		if(!articleRef) return;
		if(document.fullscreenElement) {
			setFullScreen(false)
			document.exitFullscreen()
		} else {
			articleRef!.current!.requestFullscreen();
			setFullScreen(true)
		}
	}

  return (
    <>
      <header className="header">
        <h1>Register a new location</h1>
        <div className="steps">
          <button className="step done">
            <img src={Check} alt="Check" />
          </button>
          <div className="step-divider"></div>
          <button className="step done">2</button>
          <div className="step-divider"></div>
          <button className="step current">3</button>
          <div className="step-divider dashed"></div>
          <button className="step" disabled>
            4
          </button>
        </div>

        <button onClick={toggleFullScreen} className="fullscreen-btn">
          <img src={fullScreen ? Minimize: Maximize} alt={fullScreen ? "Minimize": "Maximize"} />
        </button>
      </header>
    </>
  );
}
