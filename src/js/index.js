import { buildRenderer } from "~/util/pixi.js"

export const main = () => {
  if (!PIXI) throw new Error("Could not detect PIXI in global scope!")

  const renderer = buildRenderer()
  document.body.appendChild(renderer.view)

  const stage = new PIXI.Container()
  renderer.render(stage)
}
