export default function pageReducer(
  state: number,
  action:
    | { type: "increment" | "decrement" | "reset" }
    | { type: "set"; payload: number }
) {
  switch (action.type) {
    case "increment":
      return state === 4 ? state : state + 1;
    case "decrement":
      return state === 1 ? state : state - 1;
    case "reset":
      return 1;
    case "set":
      console.log(action.payload);
      return action.payload;
    default:
      throw new Error("error");
  }
}
