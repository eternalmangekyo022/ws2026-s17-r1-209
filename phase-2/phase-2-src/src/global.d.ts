export {};

declare global {
  interface IInputRule {
    isNum?: boolean;
    length: [number, number];
  }

  interface IFormState {
    name: string;
    description: string;
    postalCode: string;
    city: string;
    address: string;
    openAt: "everyday" | "weekdays" | "weekend";
    from: string;
    to: string;
  }
}
