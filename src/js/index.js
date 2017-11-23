export const main = () => {
  if (!PIXI) throw new Error("Could not detect PIXI in global scope!")

  const renderer = PIXI.autoDetectRenderer(256, 256)
  document.body.appendChild(renderer.view)

  const stage = new PIXI.Container()
  renderer.render(stage)
}
