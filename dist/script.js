import Slide from "./Slide.js";
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");
const container = document.getElementById("slide");
if (elements && controls && container && elements.children.length) {
    const slide = new Slide(container, Array.from(elements.children), controls, 3000);
    slide.show(slide.index);
}
//# sourceMappingURL=script.js.map