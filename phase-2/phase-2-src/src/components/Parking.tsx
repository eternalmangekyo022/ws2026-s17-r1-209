import { useContext } from "react";
import ServicesContext from "../context/services";

export default function Parking() {
  const { services, dispatchServices } = useContext(ServicesContext);

  function handleChange(radioName: string) {
    dispatchServices({ type: "parking", payload: radioName });
  }

  return (
    <>
      <h3>Parking</h3>
      <div className="input-row">
        {["Easy", "Medium", "Hard"].map((i) => (
          <label
            key={i}
            htmlFor={`radio-${i}`}
            className="cnr-label"
            onClick={() => handleChange(i)}
          >
            <input
              type="radio"
              name={`radio-${i}`}
              checked={services.parking === i}
              onChange={() => handleChange(i)}
            />
            <span>{i}</span>
          </label>
        ))}
      </div>
    </>
  );
}
