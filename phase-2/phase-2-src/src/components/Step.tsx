import Check from "../assets/check.svg";

type Props = {
  page: number;
  step: number;
};

export default function Step({ step, page }: Props) {
  const isCompleted = page === 4;
  const stepState = isCompleted
    ? "done"
    : step < page
    ? "done"
    : step === page
    ? "current"
    : "disabled";

  const buttonContent = isCompleted ? <img src={Check} alt="Check" /> : step;

  return (
    <>
      <button
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
