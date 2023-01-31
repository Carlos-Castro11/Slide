export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.show(this.index);
        this.init();
    }
    hide(el) {
        el.classList.remove("active");
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        this.slides.forEach((el) => {
            this.hide(el);
        });
        this.slide.classList.add("active");
    }
    prev() {
        this.show(this.index - 1);
    }
    next() {
        this.show(this.index + 1);
    }
    addControls() {
        const prevButoon = document.createElement("button");
        const nextButoon = document.createElement("button");
        this.controls.appendChild(prevButoon);
        this.controls.appendChild(nextButoon);
        prevButoon.addEventListener("pointerup", () => this.prev());
        nextButoon.addEventListener("pointerup", () => this.next());
    }
    init() {
        this.addControls();
        this.show(this.index);
    }
}
//# sourceMappingURL=Slide.js.map