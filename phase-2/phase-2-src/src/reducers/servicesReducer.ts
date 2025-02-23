export default function servicesReducer(
  state: IServices,
  action: ServicesReducerAction
): IServices {
  if (action.type === "reset") {
    return {
      freeWiFi: false,
      accessibleEntry: false,
      loungeArea: false,
      backgroundMusic: false,
      costumerService: false,
      parking: "Easy",
    };
  }
  return {
    ...state,
    [action.type]: action.payload,
  };
}
