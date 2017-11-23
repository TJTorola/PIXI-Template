import Pixi from "pixi.js"

export const main = () =>
  Pixi.utils.sayHello(Pixi.utils.isWebGLSupported() ? "WebGL" : "canvas")
