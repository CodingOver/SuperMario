import SpriteSheet from "./SpriteSheet.js"


function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image()
        image.addEventListener("load", () => {
            resolve(image)
        });
        image.src = url
    });
}
const canvas = document.getElementById("screen")
const ctx = canvas.getContext("2d")

ctx.fillRect(0, 0, 50, 50)

loadImage("/SuperMario/public/img/tiles.png")
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16)
        sprites.define("ground", 0, 0)
        sprites.draw("ground", ctx, 45, 62)
    })