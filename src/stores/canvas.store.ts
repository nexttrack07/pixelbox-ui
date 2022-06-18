import { writable } from "svelte/store";
import { fabric } from 'fabric'

function createCanvas() {
  const { subscribe, update, set } = writable<fabric.Canvas>(null)

  return {
    subscribe,
    addText: (text: string) => {
      const textEl = new fabric.Text(text, { top: 100, left: 200 })
      update(c => { 
        c.add(textEl)
        return c
      })
    },
    init: (canvasId: string, options: { width: number, height: number }) => {
      const canvas = new fabric.Canvas(canvasId, options)
      set(canvas)
    }
  }
}

export const canvasStore = createCanvas()
