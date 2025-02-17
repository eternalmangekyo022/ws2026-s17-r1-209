export {};

declare global {
  interface IInputRule {
    isNum: boolean;
    length: [number, number];
  }
}
