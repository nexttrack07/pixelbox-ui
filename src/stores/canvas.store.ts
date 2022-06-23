import { Writable, writable } from "svelte/store";
import { fabric } from "fabric";

type CanvasState = {
  canvas: fabric.Canvas;
  activeObject: fabric.Object;
};

export const canvasState = writable<CanvasState>(
  Object.freeze({
    canvas: null,
    activeObject: null,
  })
);

const objs = [
  new fabric.Rect({
    width: 100,
    height: 100,
    top: 300,
    left: 100,
    fill: "red",
  }),
  new fabric.Text("Hello Jibran", {
    top: 50,
    left: 100,
    fill: "blue",
    fontSize: 45,
    fontFamily: "Lobster",
  }),
  new fabric.Rect({
    width: 100,
    height: 100,
    top: 100,
    left: 100,
    fill: "purple",
  }),
];

export const initCanvas = (
  canvasId: string,
  options: fabric.ICanvasOptions
) => {
  const newCanvas = new fabric.Canvas(canvasId, options);
  objs.map((obj) => newCanvas.add(obj));
  newCanvas.on("mouse:down", (options) => {
    if (options.target) {
      canvasState.update((state) => {
        return Object.freeze({
          ...state,
          activeObject: newCanvas.getActiveObject(),
        });
      });
    } else {
      canvasState.update((state) =>
        Object.freeze({ ...state, activeObject: null })
      );
    }
  });
  canvasState.set(Object.freeze({ canvas: newCanvas, activeObject: null }));
};

export const addText = (
  text: string,
  options: fabric.TextOptions = { fontSize: 20 }
) => {
  const textEl = new fabric.Textbox(text, options);
  canvasState.update((c) => {
    c.canvas.add(textEl);
    return Object.freeze(c);
  });
};

export const updateTextObject = (prop: keyof fabric.Text, val: any) => {
  canvasState.update((state) => {
    if (state.activeObject instanceof fabric.Text) {
      state.activeObject.set(prop, val);
      state.canvas.renderAll();
      return Object.freeze(state);
    } else {
      return Object.freeze(state);
    }
  });
};

export const updateActiveObject = (prop: keyof fabric.Object, val: any) => {
  canvasState.update((state) => {
    state.activeObject.set(prop, val);
    state.canvas.renderAll();
    return Object.freeze(state);
  });
};

export const removeActiveObject = () => {
  canvasState.update((state) => {
    state.canvas.remove(state.activeObject);
    state.canvas.renderAll();

    return Object.freeze({ ...state, activeObject: null });
  });
};
