const width = 500;
const height = 500;

function cubicBezier(p0: Point, p1: Point, p2: Point, p3: Point, t: number) {
  var u = 1 - t;
  var tt = t * t;
  var uu = u * u;
  var uuu = uu * u;
  var ttt = tt * t;

  var p: Point = {
    x: 0,
    y: 0,
  };
  p.x = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
  p.y = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;

  return p;
}

export function setupCanvas(element: HTMLCanvasElement) {
  const dpr = window.devicePixelRatio || 1;
  const rect = element.parentElement!.getBoundingClientRect();
  element.style.width = rect.width + "px";
  element.style.height = rect.height + "px";

  element.width = width;
  element.height = height;

  console.log(element);
  const ctx = element.getContext("2d")!;
  ctx.scale(dpr, dpr);
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
  const startPoint = { x: 50 / dpr, y: 100 / dpr };
  const controlPoint1 = { x: 150 / dpr, y: 10 / dpr };
  const controlPoint2 = { x: 250 / dpr, y: 200 / dpr };
  const endPoint = { x: 350 / dpr, y: 100 / dpr };

  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";

  ctx.save();
  ctx.arc(startPoint.x, startPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.arc(endPoint.x, endPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(controlPoint1.x, controlPoint1.y);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(controlPoint1.x, controlPoint1.y, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(endPoint.x, endPoint.y);
  ctx.lineTo(controlPoint2.x, controlPoint2.y);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(controlPoint2.x, controlPoint2.y, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  let count = 0;
  for (var t = 0; t <= 1; t += 0.01) {
    var pointOnCurve = cubicBezier(
      startPoint,
      controlPoint1,
      controlPoint2,
      endPoint,
      t
    );
    ctx.beginPath();
    ctx.arc(pointOnCurve.x, pointOnCurve.y, t * 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    count++;
  }
  ctx.restore();
}

interface Point {
  x: number;
  y: number;
}
