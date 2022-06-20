import { writable } from 'svelte/store'
import { fabric } from 'fabric'


function createCanvas() {
  const canvas = writable<fabric.Canvas>(null)
  const activeObject = writable<fabric.Object>(null)
  const { subscribe, update, set } = canvas

  return {
    subscribe,
    addText: (text: string, options = { fontSize: 20 }) => {
      const textEl = new fabric.Text(text, { top: 100, left: 200, ...options })
      update((c) => {
        c.add(textEl)
        return c
      })
    },
    init: (canvasId: string, options: { width: number; height: number }) => {
      const canvas = new fabric.Canvas(canvasId, options)
      canvas.on('mouse:down', (options) => {
        if (options.target) {
          activeObject.set(canvas.getActiveObject())
        } else {
          activeObject.set(null)
        }
      })
      set(canvas)
    },
    updateActiveObject: (prop: keyof fabric.Object, val: any) => {
      update(c => {
        const activeObj = c.getActiveObject()
        activeObj.set(prop, val)
        c.renderAll()

        return c
      })
    },
    getActiveObject: () => {
      return activeObject
    }
  }
}

export const canvasStore = createCanvas()
