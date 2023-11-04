interface AlphabetData {
  startPoint: Point;
  controlPoint1: Point;
  controlPoint2: Point;
  endPoint: Point;
}
// width is 1
// height is 1
export const A: AlphabetData[] = [
  {
    // top to left diagonal
    startPoint: { x: 0.5, y: 0 },
    controlPoint1: { x: 0.25, y: 0.25 },
    controlPoint2: { x: 0.25, y: 0.5 },
    endPoint: { x: 0, y: 1 },
  },
  {
    // top to right diagonal
    startPoint: { x: 0.5, y: 0 },
    controlPoint1: { x: 0.75, y: 0.25 },
    controlPoint2: { x: 0.75, y: 0.5 },
    endPoint: { x: 1, y: 1 },
  },
  {
    // horizontal
    startPoint: { x: 0, y: 0.5 },
    controlPoint1: { x: 0.25, y: 0.5 },
    controlPoint2: { x: 0.75, y: 0.5 },
    endPoint: { x: 1, y: 0.5 },
  },
];

export const B: AlphabetData[] = [
  {
    //vertical
    startPoint: { x: 0, y: 0 },
    controlPoint1: { x: 0, y: 0.25 },
    controlPoint2: { x: 0, y: 0.75 },
    endPoint: { x: 0, y: 1 },
  },
  {
    // top to right diagonal
    startPoint: { x: 0, y: 0 },
    controlPoint1: { x: 0.25, y: 0.25 },
    controlPoint2: { x: 0.5, y: 0.25 },
    endPoint: { x: 1, y: 0.25 },
  },
  {
    // right diagonal to middle
    startPoint: { x: 1, y: 0.25 },
    controlPoint1: { x: 0.75, y: 0.25 },
    controlPoint2: { x: 0.75, y: 0.5 },
    endPoint: { x: 0, y: 0.5 },
  },
  {
    // middle to right bottom
    startPoint: { x: 0, y: 0.5 },
    controlPoint1: { x: 0.75, y: 0.5 },
    controlPoint2: { x: 0.75, y: 0.75 },
    endPoint: { x: 1, y: 0.75 },
  },
  {
    // right bottom to bottom
    startPoint: { x: 1, y: 0.75 },
    controlPoint1: { x: 0.25, y: 0.75 },
    controlPoint2: { x: 0.5, y: 0.75 },
    endPoint: { x: 0, y: 1 },
  },
];

export const C: AlphabetData[] = [
  {
    startPoint: { x: 1, y: 0 },
    controlPoint1: { x: 0.75, y: 0 },
    controlPoint2: { x: 0.25, y: 0 },
    endPoint: { x: 0, y: 0.5 },
  },
  {
    startPoint: { x: 0, y: 0.5 },
    controlPoint1: { x: 0.25, y: 0.5 },
    controlPoint2: { x: 0.75, y: 0.5 },
    endPoint: { x: 1, y: 1 },
  },
];

export const D: AlphabetData[] = [
  {
    // vertical
    startPoint: { x: 0, y: 0 },
    controlPoint1: { x: 0, y: 0.25 },
    controlPoint2: { x: 0, y: 0.75 },
    endPoint: { x: 0, y: 1 },
  },
  {
    // top to right middle
    startPoint: { x: 0, y: 0 },
    controlPoint1: { x: 0.25, y: 0.25 },
    controlPoint2: { x: 0.5, y: 0.25 },
    endPoint: { x: 1, y: 0.5 },
  },
  {
    // right middle to bottom
    startPoint: { x: 1, y: 0.5 },
    controlPoint1: { x: 0.5, y: 0.75 },
    controlPoint2: { x: 0.25, y: 0.75 },
    endPoint: { x: 0, y: 1 },
  },
];

export const E: AlphabetData[] = [
  {
    // vertical
    startPoint: { x: 0, y: 0 },
    controlPoint1: { x: 0, y: 0.25 },
    controlPoint2: { x: 0, y: 0.75 },
    endPoint: { x: 0, y: 1 },
  },
  {
    // horizontal
    startPoint: { x: 0, y: 0 },
    controlPoint1: { x: 0.25, y: 0.5 },
    controlPoint2: { x: 0.75, y: 0.5 },
    endPoint: { x: 1, y: 0 },
  },
  {
    // middle horizontal
    startPoint: { x: 0, y: 0.5 },
    controlPoint1: { x: 0.25, y: 1 },
    controlPoint2: { x: 0.75, y: 1 },
    endPoint: { x: 1, y: 0.5 },
  },
  {
    // top horizontal
    startPoint: { x: 0, y: 1 },
    controlPoint1: { x: 0.25, y: 0 },
    controlPoint2: { x: 0.75, y: 0 },
    endPoint: { x: 1, y: 1 },
  },
];

export const F: AlphabetData[] = [
  {
    // vertical
    startPoint: { x: 0, y: 0 },
    controlPoint1: { x: 0, y: 0.25 },
    controlPoint2: { x: 0, y: 0.75 },
    endPoint: { x: 0, y: 1 },
  },
  {
    // horizontal
    startPoint: { x: 0, y: 0 },
    controlPoint1: { x: 0.25, y: 0.5 },
    controlPoint2: { x: 0.75, y: 0.5 },
    endPoint: { x: 1, y: 0 },
  },
  {
    // middle horizontal
    startPoint: { x: 0, y: 0.5 },
    controlPoint1: { x: 0.25, y: 1 },
    controlPoint2: { x: 0.75, y: 1 },
    endPoint: { x: 1, y: 0.5 },
  },
];

export const G: AlphabetData[] = [
  {
    // right top to top middle
    startPoint: { x: 0.85, y: 0.15 },
    controlPoint1: { x: 0.75, y: 0 },
    controlPoint2: { x: 0.25, y: 0 },
    endPoint: { x: 0.5, y: 0 },
  },
  {
    // top middle to left
    startPoint: { x: 0.5, y: 0 },
    controlPoint1: { x: 0.25, y: 0.5 },
    controlPoint2: { x: 0.75, y: 0.5 },
    endPoint: { x: 0, y: 0.5 },
  },
  {
    // left to bottom
    startPoint: { x: 0, y: 0.5 },
    controlPoint1: { x: 0.75, y: 1 },
    controlPoint2: { x: 0.25, y: 1 },
    endPoint: { x: 0.5, y: 1 },
  },
  {
    // bottotm to right
    startPoint: { x: 0.5, y: 1 },
    controlPoint1: { x: 0.25, y: 0.5 },
    controlPoint2: { x: 0.75, y: 0.5 },
    endPoint: { x: 0.85, y: 0.5 },
  },
  {
    // horizontal
    startPoint: { x: 0.5, y: 0.5 },
    controlPoint1: { x: 0.75, y: 0.75 },
    controlPoint2: { x: 0.75, y: 0.75 },
    endPoint: { x: 1, y: 0.5 },
  },
];
