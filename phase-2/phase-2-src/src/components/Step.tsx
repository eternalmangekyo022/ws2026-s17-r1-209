import Check from "../assets/check.svg";
import { useContext } from "react";
import PageContext from "../context/page";

type Props = {
  page: number;
  step: number;
};

export default function Step({ step, page }: Props) {
  const { dispatchPage } = useContext(PageContext);

  const isCompleted = page === 4;
  const stepState = isCompleted
    ? "done"
    : step < page
    ? "done"
    : step === page
    ? "current"
    : "disabled";

  const buttonContent = isCompleted ? <img src={Check} alt="Check" /> : step;

  function handleClick(): void {
    if (stepState === "disabled" && step >= page) return;
    dispatchPage({ type: "set", payload: step });
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`step ${stepState}`}
        disabled={stepState === "disabled" || isCompleted}
      >
        {buttonContent}
      </button>
      {step < 4 && (
        <div
          className={`step-divider ${
            ["current", "disabled"].includes(stepState) ? "dashed" : ""
          }`}
        />
      )}
    </>
  );
}
