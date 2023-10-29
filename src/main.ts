import "./style.css";
import { setupCanvas } from "./canvas.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="background">
    <canvas id="canvas"/>
  </div>
`;

setupCanvas(document.querySelector<HTMLCanvasElement>("#canvas")!);
