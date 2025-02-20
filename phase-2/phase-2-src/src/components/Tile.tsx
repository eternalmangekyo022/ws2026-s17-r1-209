import Machine from "../assets/washing-machine.svg";
import Waiting from "../assets/armchair.svg";
import Table from "../assets/space.svg";

import { useContext, useState, useEffect } from "react";
import LayoutContext from "../context/layout";

interface RowTest {
  name: `row-${string}`; // Ensures name starts with "row-"
  tableId?: never; // tableId is not allowed
}

interface RegularTest {
  name: string;
  tableId: number; // tableId is required
}

type Test = RowTest | RegularTest;

// Examples
const validTest1: Test = { name: "row-123" }; // Valid: tableId is not required
const validTest2: Test = { name: "something", tableId: 1 }; // Valid: tableId is required

console.log(validTest1, validTest2);

type Props = Tile;

export default function Tile({ type, weight, id, pos }: Props) {
  const { tiles, dispatchTiles } = useContext(LayoutContext);

  const [image, setImage] = useState<{ img: string; alt: string }>({
    img: "",
    alt: "",
  });

  function getImage(): { img: string; alt: string } {
    switch (type) {
      case "dryer":
        return { img: Machine, alt: "Washing Machine" };
      case "washer":
        return { img: Machine, alt: "" };
      case "table":
        return { img: Table, alt: "" };
      case "waiting":
        return { img: Waiting, alt: "" };
      default:
        return image;
    }
  }

  useEffect(() => {
    if (!["empty", "wall", "entrance"].includes(type)) {
      const image = getImage();
      setImage(image);
    }
  }, []);

  return (
    <div className={`grid-item ${type}`}>
      {!["empty", "entrance"].includes(type) && (
        <>
          <img src={image.img} alt={image.alt} />
          <span>
            {!["table", "waiting"].includes(type)
              ? `${type[0].toUpperCase()}${type.substring(1)}`
              : type === "table"
              ? "Folding Table"
              : "Waiting Area"}{" "}
            {weight && ` (${weight} kg)`}
          </span>
        </>
      )}
    </div>
  );
}
