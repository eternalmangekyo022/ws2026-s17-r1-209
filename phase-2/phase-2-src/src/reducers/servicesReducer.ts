export default function servicesReducer(
  state: IServices,
  action: ServicesReducerAction
) {
  return { ...state, [action.type]: action.payload };
}
