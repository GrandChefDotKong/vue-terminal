import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
  } from "./updateCustomProperty"
  
  const SPEED = 0.03;
  
  export function setupGround(groundElems: Element[]) {
    setCustomProperty(groundElems[0], "--left", 0)
    setCustomProperty(groundElems[1], "--left", 300)
  }
  
  export function updateGround(groundElems: Element[], delta: number, speedScale: number) {
    groundElems.forEach((ground: any) => {
      incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)
  
      if (getCustomProperty(ground, "--left") <= -300) {
        incrementCustomProperty(ground, "--left", 600)
      }
    })
  }