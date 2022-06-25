import App from "./App.svelte";
import "cropperjs/dist/cropper.css";
import "./index.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
