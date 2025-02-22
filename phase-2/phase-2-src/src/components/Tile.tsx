import Machine from "../assets/washing-machine.svg";
import Waiting from "../assets/armchair.svg";
import Table from "../assets/space.svg";
import { useContext, useState, useEffect, memo } from "react";
import LayoutContext from "../context/layout";

export default memo(function Tile({
  type,
  weight,
  id,
  pos = { x: 0, y: 0 },
}: Tile) {
  const { dispatchTiles, dragging, setDragging } = useContext(LayoutContext);

  const [image, setImage] = useState<{ img: string | null; alt: string }>({
    img: null,
    alt: "",
  });
  const [isHovered, setIsHovered] = useState(false);
  //
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

  function handleOnClick(clickType: "single" | "double") {
    if (id.includes("rows")) return;
    const uid: PosId = id as PosId;
    if (type !== "empty" && clickType === "single") {
      dispatchTiles({
        type: "modify",
        payload: {
          id: uid,
          modified: {
            id,
            type: "empty",
            pos,
            weight,
          },
        },
      });
    } else if (clickType === "double") {
      dispatchTiles({
        type: "modify",
        payload: {
          id: uid,
          modified: {
            id,
            type: "wall",
            pos,
            weight,
          },
        },
      });
    }
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
    setIsHovered(true);
  }

  function handleDrop() {
    if (!dragging) return;
    const uid = id as PosId;
    if (isHovered) setIsHovered(false);
    dispatchTiles({
      type: "modify",
      payload: {
        id: uid,
        modified: { ...dragging, id, pos },
      },
    });
  }

  function handleContextMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const uid = id as PosId;
    e.preventDefault();
    dispatchTiles({
      type: "modify",
      payload: {
        id: uid,
        modified: {
          id,
          type: "entrance",
          pos,
          weight,
        },
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
      onClick={() => handleOnClick("single")}
      onDoubleClick={() => handleOnClick("double")}
      draggable={id.includes("rows")}
      onDrag={handleDragStart}
      onDragEnd={handleDragStop}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={() => setIsHovered(false)}
      onDrop={handleDrop}
      onContextMenu={(e) => handleContextMenu(e)}
      style={{ opacity: isHovered ? 0.25 : 0.75 }}
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
});
