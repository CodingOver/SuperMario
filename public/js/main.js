function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image()
        image.addEventListener("load", () => {
            resolve(image)
        });
        image.src = url
    });
}

class SpriteSheet {
    constructor(image, width, height) {
        this.image = image
        this.width = width
        this.height = height

    }

    draw() {

    }
}

const canvas = document.getElementById("screen")
const ctx = canvas.getContext("2d")

ctx.fillRect(0, 0, 50, 50)

loadImage("/SuperMario/public/img/tiles.png")
    .then(image => {
        const spites = new SpriteSheet(image, 16, 16)
        sprites.define("ground", 0, 0)
        sprites.draw("ground", context, 45, 62)

        ctx.drawImage(image,
            0, 0, 16, 16,
            0, 34, 16, 16)
    })