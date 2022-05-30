  export function getCustomProperty(elem: any, prop: string): number {
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
  }
  
  export function setCustomProperty(elem: any, prop: string, value: number) {
    elem.style.setProperty(prop, value)
  }
  
  export function incrementCustomProperty(elem: Element, prop: string, inc: number) {
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
  }