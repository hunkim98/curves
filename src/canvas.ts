import { drawCubicBezierPath } from "./utils/cubicBezierPath";
import { drawCubicBezierPathLine } from "./utils/cubicBezierPathLine";

const width = 500;
const height = 500;

export function setupCanvas(element: HTMLCanvasElement) {
  const dpr = window.devicePixelRatio || 1;
  const rect = element.parentElement!.getBoundingClientRect();
  element.style.width = rect.width + "px";
  element.style.height = rect.height + "px";

  element.width = width;
  element.height = height;

  const ctx = element.getContext("2d")!;
  ctx.clearRect(0, 0, width, height);
  ctx.scale(dpr, dpr);
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
  const startPoint = { x: 50, y: 100 };
  const controlPoint1 = { x: 150, y: 10 };
  const controlPoint2 = { x: 250, y: 200 };
  const endPoint = { x: 350, y: 100 };
  // drawCubicBezierPath(ctx, startPoint, controlPoint1, controlPoint2, endPoint);
  drawAlphabetA(ctx);
}

// drawing Alphabet A
export function drawAlphabetA(ctx: CanvasRenderingContext2D) {
  const dpr = window.devicePixelRatio || 1;
  const alphabetWidth = (width * dpr) / 2 - 100;
  const alphabetHeight = (height * dpr) / 2 - 60;
  const point1: Point = { x: width / 2, y: 50 };
  const point2: Point = { x: width / 2 - alphabetWidth / 2, y: alphabetHeight };
  const point1Control1: Point = {
    x: width / 4 - alphabetWidth / 4,
    y: 50 + alphabetHeight / 4,
  };
  const point1Control2: Point = {
    x: width / 2 - alphabetWidth / 4,
    y: 50 + alphabetHeight / 2,
  };
  // drawCubicBezierPath(ctx, point1, point1Control1, point1Control2, point2);
  drawCubicBezierPathLine(ctx, point1, point1Control1, point1Control2, point2);

  const point3: Point = {
    x: width / 2 - alphabetWidth / 4,
    y: 50 + alphabetHeight / 2,
  };
  const point4: Point = {
    x: width / 2 + alphabetWidth / 4,
    y: 50 + alphabetHeight / 2,
  };
  const point3Control1: Point = {
    x: width / 2 - alphabetWidth / 4,
    y: 50 + alphabetHeight / 2,
  };
  const point3Control2: Point = {
    x: width / 2 + alphabetWidth / 4,
    y: 50 + alphabetHeight / 2,
  };
  // drawCubicBezierPath(ctx, point3, point3Control1, point3Control2, point4);
  drawCubicBezierPathLine(ctx, point3, point3Control1, point3Control2, point4);

  const point5: Point = { x: width / 2, y: 50 };
  const point6: Point = { x: width / 2 + alphabetWidth / 2, y: alphabetHeight };
  const point5Control1: Point = {
    x: width / 2 + alphabetWidth / 4,
    y: 50 + alphabetHeight / 4,
  };
  const point5Control2: Point = {
    x: width / 2 + alphabetWidth / 4,
    y: 50 + alphabetHeight / 2,
  };
  drawCubicBezierPathLine(ctx, point5, point5Control1, point5Control2, point6);
  // drawCubicBezierPath(ctx, point5, point5Control1, point5Control2, point6);
}
