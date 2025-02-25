import { useContext } from "react";
import RegisterContext from "../context/register";

export default function Select() {
  const { form, dispatchForm } = useContext(RegisterContext);

  const handleOnChange = (selected: string) =>
    dispatchForm({ type: "openAt", payload: selected });

  return (
    <div className="input-group">
      <label htmlFor="select">Open at</label>
      <select
        id="select"
        value={form.openAt}
        onChange={(e) => handleOnChange(e.target.value)}
      >
        <option value="everyday" defaultChecked={form.openAt === "everyday"}>
          Every Day
        </option>
        <option value="weekdays" defaultChecked={form.openAt === "weekdays"}>
          Weekdays
        </option>
        <option value="weekend" defaultChecked={form.openAt === "weekend"}>
          Weekend
        </option>
      </select>
    </div>
  );
}
