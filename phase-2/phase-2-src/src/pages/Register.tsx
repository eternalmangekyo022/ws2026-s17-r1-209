import Input from "../components/Input";
import TimeInput from "../components/TimeInput";
import OpenTimeContext from "../context/opentime";
import { useRef } from "react";

export default function Register() {
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input name="name" labelText="Name" id={1} rules={{ length: [3, 32] }} />
      <Input
        name="description"
        labelText="Register"
        id={2}
        textArea
        rules={{ length: [10, 256] }}
      />
      <div className="input-row">
        <Input
          name="postalCode"
          labelText="Postal Code"
          id={3}
          rules={{ isNum: true, length: [4, 4] }}
        />
        <Input
          name="city"
          labelText="City"
          id={4}
          rules={{ length: [3, 32] }}
        />
        <Input
          name="address"
          labelText="Address"
          id={5}
          rules={{ length: [5, 128] }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="select">Open at</label>
        <select id="select">
          <option value="1" defaultChecked>
            Every Day
          </option>
          <option value="2">Weekdays</option>
          <option value="3">Weekend</option>
        </select>
      </div>
      <hr />

      <h2>Operational hours</h2>

      <div className="input-row">
        <OpenTimeContext.Provider value={{ fromRef, toRef }}>
          <TimeInput name="from" id={6} labelText="From" />
          <TimeInput name="to" id={7} labelText="To" />
        </OpenTimeContext.Provider>
      </div>
    </>
  );
}
