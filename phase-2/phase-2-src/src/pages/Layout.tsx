import Washer from "../assets/washing-machine.svg";
import Waiting from "../assets/armchair.svg";
import Folding from "../assets/space.svg";

export default function Layout() {
  return (
    <>
      <h1>Shop layout</h1>
      <div className="dnd-row">
        <div className="grid-item washer">
          <img src={Washer} alt="Washing Machine" />
          <span>Washer (11 kg)</span>
        </div>
        <div className="grid-item dryer">
          <img src={Washer} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item">
          <img src={Waiting} alt="Waiting Area" />
          <span>Waiting Area</span>
        </div>
        <div className="grid-item">
          <img src={Folding} alt="Folding Tables" />
          <span>Folding Table</span>
        </div>
      </div>

      <div className="grid">
        <div className="grid-item empty"></div>
        <div className="grid-item wall">
          <span>Wall</span>
        </div>
        <div className="grid-item washer">
          <img src={Washer} alt="Washing Machine" />
          <span>Washer (11 kg)</span>
        </div>
        <div className="grid-item dryer">
          <img src={Washer} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item dryer">
          <img src={Washer} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item entrance"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
      </div>
    </>
  );
}
