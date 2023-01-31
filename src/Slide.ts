export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slide: Element;

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.index = 0;
    this.slide = this.slides[this.index];

    this.show(this.index);
    this.init();
  }

  hide(el: Element) {
    el.classList.remove("active");
  }

  show(index: number) {
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

  private addControls() {
    const prevButoon = document.createElement("button");
    const nextButoon = document.createElement("button");
    this.controls.appendChild(prevButoon);
    this.controls.appendChild(nextButoon);

    prevButoon.addEventListener("pointerup", () => this.prev());
    nextButoon.addEventListener("pointerup", () => this.next());
  }

  private init() {
    this.addControls();
    this.show(this.index);
  }
}
