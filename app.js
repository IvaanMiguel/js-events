const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const canvasBounds = canvas.getBoundingClientRect()
const r = 50

ctx.fillStyle = "rgba(60, 179, 113, .5)"

canvas.addEventListener("click", e => {
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top

    ctx.beginPath()

    if (isSquare) {
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        return
    }

    const side = r * 2

    ctx.fillRect(x - r, y - r, side, side)
    ctx.strokeRect(x - r, y - r, side, side)
})

const getRandomRGBA = () => Math.floor(Math.random() * 255);

canvas.addEventListener("mouseover", () => {
    const r = getRandomRGBA()
    const g = getRandomRGBA()
    const b = getRandomRGBA()
    const a = Math.random().toFixed(1)

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
})

let isSquare = true

canvas.addEventListener("mouseout", () => { isSquare = !isSquare })
