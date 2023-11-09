export function drawCubicBezierPath(
  ctx: CanvasRenderingContext2D,
  startPoint: Point,
  controlPoint1: Point,
  controlPoint2: Point,
  endPoint: Point,
  isControlPointVisible: boolean = false
) {
  const dpr = window.devicePixelRatio || 1;
  const scaledStartPoint = { x: startPoint.x / dpr, y: startPoint.y / dpr };
  const scaledControlPoint1 = {
    x: controlPoint1.x / dpr,
    y: controlPoint1.y / dpr,
  };
  const scaledControlPoint2 = {
    x: controlPoint2.x / dpr,
    y: controlPoint2.y / dpr,
  };
  const scaledEndPoint = { x: endPoint.x / dpr, y: endPoint.y / dpr };

  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.save();
  ctx.beginPath();
  ctx.arc(scaledStartPoint.x, scaledStartPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(scaledEndPoint.x, scaledEndPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(scaledStartPoint.x, scaledStartPoint.y);
  ctx.lineTo(scaledControlPoint1.x, scaledControlPoint1.y);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(scaledControlPoint1.x, scaledControlPoint1.y, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(scaledEndPoint.x, scaledEndPoint.y);
  ctx.lineTo(scaledControlPoint2.x, scaledControlPoint2.y);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(scaledControlPoint2.x, scaledControlPoint2.y, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  ctx.save();
  let count = 0;
  for (var t = 0; t <= 1; t += 0.01) {
    var pointOnCurve = cubicBezier(
      scaledStartPoint,
      scaledControlPoint1,
      scaledControlPoint2,
      scaledEndPoint,
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
