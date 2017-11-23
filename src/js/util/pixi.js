export const buildRenderer = (
  {
    autoResize = true,
    width = window.innerWidth,
    height = window.innerHeight
  } = {}
) => {
  const renderer = PIXI.autoDetectRenderer(width, height)

  // Have the renderer take up the entire screen
  renderer.view.style.position = "absolute"
  renderer.view.style.display = "block"
  renderer.autoResize = true

  if (autoResize) {
    // Resize view to the size of the window whenever it changes and now
    const resizeView = () =>
      renderer.resize(window.innerWidth, window.innerHeight)
    window.onresize = resizeView
  }

  return renderer
}
