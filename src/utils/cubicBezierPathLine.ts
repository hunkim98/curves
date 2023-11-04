export function drawCubicBezierPathLine(
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
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.moveTo(scaledStartPoint.x, scaledStartPoint.y);
  ctx.bezierCurveTo(
    scaledControlPoint1.x,
    scaledControlPoint1.y,
    scaledControlPoint2.x,
    scaledControlPoint2.y,
    scaledEndPoint.x,
    scaledEndPoint.y
  );
  ctx.stroke();
  ctx.closePath();

  ctx.restore();
}
