
let tapeSkills = [
  'HTML/CSS',
  'JAVASCRIPT',
  'REACT',
  'NODE.JS',
  'REACT NATIVE',
  'TYPESCRIPT',
];

let lenta = [];

for (let a = 0; a <= 3; a++) {
  lenta.push(...tapeSkills);
}


function getWidth(element){
let style = element.currentStyle || window.getComputedStyle(element),
    width = element.offsetWidth, // or use style.width
    margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
    padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
    border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

return width + margin - padding + border
}


class InfiniteLine{
    constructor(rootElem, thread, reverse) {
        this.rootElem = rootElem;
        this.thread = thread;
        this.reverse = reverse;
        this.position = 0;
    }

    init() {
        this.fillThread();
        this.animate();
    }

    fillThread() {
        for (let i = 0; i < 2; i++) {
            this.thread.forEach(lang => {
                this.rootElem.insertAdjacentHTML('beforeend',
                    `<div class='banner__item'><span class = "banner__text">${lang}</span>
                    <span class = "banner-point"></span></div>`
                );
            });
        }
    }

    animate() {

        if (this.reverse) {
            let elem = this.rootElem.children[this.rootElem.children.length-1];
            this.position += 2;
            let w = getWidth(elem);
        
            if (this.position >= 0) {
                this.position = -w;
                this.rootElem.removeChild(elem);
                this.rootElem.insertBefore(elem,this.rootElem.children[0]);
            }
            this.rootElem.style.transform = `translateX(${this.position}px)`;
        } else { 
            let elem = this.rootElem.children[0];
            this.position -= 2;
            let w = getWidth(elem);
        
            if (-this.position >= w) {
                this.position = 0;
                this.rootElem.removeChild(elem);
                this.rootElem.appendChild(elem);
            }
            this.rootElem.style.transform = `translateX(${this.position}px)`;
        }


        requestAnimationFrame(()=>this.animate())
    }


}



let topLine = new InfiniteLine(
    document.getElementById('banner__item'),
    lenta,
    false
);



let bottomLine = new InfiniteLine(
    document.getElementById('banner__item_bottom'),
    lenta,
    true
);

topLine.init();
bottomLine.init();
