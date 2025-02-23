import { useContext } from "react";
import ServicesContext from "../context/services";
import RegisterContext from "../context/register";
import PageContext from "../context/page";
import LayoutContext from "../context/layout";

export default function Final() {
  const { services, dispatchServices } = useContext(ServicesContext);
  const { form, dispatchForm } = useContext(RegisterContext);
  const { dispatchPage } = useContext(PageContext);
  const {
    tiles: { tiles },
    dispatchTiles,
  } = useContext(LayoutContext);

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

  /* ```csv
Dryer (18 kg),-,Washer (11 kg),Washer (8 kg),Washer (8 kg)
Dryer (25 kg),-,-,-,-
Dryer (25 kg),-,Folding Table,Folding Table,-
Wall,-,Folding Table,Wall,-
-,-,-,-,-
-,Entrance,Waiting Area,Waiting Area,Waiting Area
``` */

  function getStringFromType(
    tileType: ITileFormats,
    weight: number = 0
  ): string {
    switch (tileType) {
      case "wall":
        return "Wall";
      case "table":
        return "Folding Table";
      case "empty":
        return "-";
      case "waiting":
        return "Waiting Area";
      case "entrance":
        return "Entrance";
      case "washer":
        return `Washer (${weight} kg)`;
      case "dryer":
        return `Dryer (${weight} kg)`;
      default:
        return "";
    }
  }

  function generateFloorPlan(): string {
    let final = "";
    for (let i = 0; i < tiles.length; i++) {
      const { type } = tiles[i];
      const toAdd = getStringFromType(type, tiles[i].weight);
      final += `${toAdd}`;
      if (i === tiles.length - 1) break;
      console.log(tiles[i].pos.x, tiles[i + 1].pos.x);
      final += tiles[i].pos.x > tiles[i + 1].pos.x ? "\n" : ",";
    }
    console.log(final);
    return final;
  }

  function downloadFloorPlan() {
    const generated = generateFloorPlan();
    const blob = new Blob([generated], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "floorplan.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
      <button className="btn" onClick={downloadFloorPlan}>
        EXPORT FLOORPLAN
      </button>
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
