import { useContext } from "react";
import ServicesContext from "../context/services";
import RegisterContext from "../context/register";
import PageContext from "../context/page";
import LayoutContext from "../context/layout";

export default function Final() {
  const { services, dispatchServices } = useContext(ServicesContext);
  const { form, dispatchForm } = useContext(RegisterContext);
  const { dispatchPage } = useContext(PageContext);
  const { dispatchTiles } = useContext(LayoutContext);

  function copyToCB() {
    const {
      name,
      description,
      postalCode,
      city,
      address,
      from,
      to,
      openAt,
      freeWiFi,
      accessibleEntry,
      loungeArea,
      backgroundMusic,
      costumerService,
      parking,
    }: IFormState & IServices = { ...form, ...services };

    navigator.clipboard.writeText(
      JSON.stringify(
        {
          name,
          description,
          postalCode: parseInt(postalCode),
          city,
          address,
          from,
          to,
          openAt,
          freeWiFi,
          accessibleEntry,
          loungeArea,
          backgroundMusic,
          costumerService,
          parking,
        },
        null,
        4
      )
    );
  }

  function reset() {
    dispatchPage({ type: "reset" });
    dispatchForm({ type: "reset", payload: "" });
    dispatchTiles({ type: "resetAll" });
    dispatchServices({ type: "reset" });
  }

  return (
    <div className="step-4-screen">
      <h1>Successful submission!</h1>
      <p>Thank you for the new location registration!</p>
      <button className="btn" onClick={copyToCB}>
        COPY FORM VALUES
      </button>
      <button className="btn">EXPORT FLOORPLAN</button>
      <hr />
      <button className="btn" onClick={reset}>
        START OVER
      </button>
    </div>
  );
}

/* {
  "name": "Test location",
  "description": "Test description :)",
  "postalCode": 1000,
  "city": "Budapest",
  "address": "Test street 1",
  "from": "07:00",
  "to": "23:00",
  "openAt": "Every Day",
  "freeWiFi": true,
  "accessibleEntry": true,
  "loungeArea": false,
  "backgroundMusic": false,
  "customerService": false,
  "parking": "Medium"
} */
