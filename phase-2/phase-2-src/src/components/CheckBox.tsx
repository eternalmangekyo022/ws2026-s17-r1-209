import { useContext } from "react";
import ServicesContext from "../context/services";
import { services as servicesData } from "../assets/data/services.json";

type Props = {
  name: keyof IServices;
};

export default function CheckBox({ name }: Props) {
  const { services, dispatchServices } = useContext(ServicesContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatchServices({ type: name, payload: e.target.checked });
  }

  return (
    <label className="cnr-label" key={name}>
      <input
        type="checkbox"
        checked={services[name] as boolean}
        onChange={(e) => handleChange(e)}
      />
      <span>{servicesData[name as keyof Omit<IServices, "parking">]}</span>
    </label>
  );
}
