import Machine from "../assets/washing-machine.svg";
import Waiting from "../assets/armchair.svg";
import Table from "../assets/space.svg";
import { useContext, useState, useEffect } from "react";
import LayoutContext from "../context/layout";

export default function Tile({ type, weight, id, pos = { x: 0, y: 0 } }: Tile) {
  const { tiles, dispatchTiles, dragging, setDragging } =
    useContext(LayoutContext);

  const [image, setImage] = useState<{ img: string | null; alt: string }>({
    img: null,
    alt: "",
  });

  function getImage(): { img: string | null; alt: string } {
    switch (type) {
      case "dryer":
        return { img: Machine, alt: "Dryer" };
      case "washer":
        return { img: Machine, alt: "Washing Machine" };
      case "table":
        return { img: Table, alt: "Folding Table" };
      case "waiting":
        return { img: Waiting, alt: "Waiting Area" };
      default:
        return { img: null, alt: "" };
    }
  }

  function handleOnClick() {
    if (type !== "empty")
      dispatchTiles({
        type: "modify",
        payload: {
          id,
          modified: {
            id,
            type: "empty",
            pos,
            weight,
          },
        },
      });
  }

  function handleDragStart() {
    setDragging({
      id,
      type,
      pos,
      weight,
    });
  }

  function handleDragStop() {
    setDragging(null);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    if (id.includes("rows")) return;
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    if (type === "empty" && dragging)
      dispatchTiles({
        type: "modify",
        payload: {
          id,
          modified: { ...dragging, id, pos },
        },
      });
  }

  useEffect(() => {
    if (!["empty", "wall", "entrance"].includes(type)) {
      const image = getImage();
      setImage(image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <div
      className={`grid-item ${type}`}
      onClick={handleOnClick}
      draggable={id.includes("rows")}
      onDrag={handleDragStart}
      onDragEnd={handleDragStop}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
    >
      {!["empty", "entrance", "wall"].includes(type) && (
        <>
          <img src={image.img as string} alt={image.alt} />
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
      {type === "wall" && <span>Wall</span>}
    </div>
  );
}
