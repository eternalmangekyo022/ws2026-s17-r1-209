export default function formReducer(
  state: IFormState,
  action: { type: keyof IFormState | "reset"; payload: string }
): IFormState {
  switch (action.type) {
    case "reset":
      return {
        name: "",
        description: "",
        postalCode: "",
        city: "",
        address: "",
        from: "",
        to: "",
        openAt: "everyday",
      };
    default:
      return { ...state, [action.type]: action.payload };
  }
}
