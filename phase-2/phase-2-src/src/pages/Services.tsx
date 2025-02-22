import CheckBox from "../components/CheckBox";
import { useContext } from "react";
import ServicesContext from "../context/services";
import Parking from "../components/Parking";

export default function Services() {
  const { services } = useContext(ServicesContext);
  return (
    <>
      <h1>Amenities and Services</h1>
      {Object.keys(services).map(
        (i) =>
          i !== "parking" && (
            <>
              <CheckBox key={i} name={i as keyof IServices} />
            </>
          )
      )}
      <hr />
      <Parking />
    </>
  );
}
