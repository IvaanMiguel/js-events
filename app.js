const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const canvasBounds = canvas.getBoundingClientRect()
const r = 50

canvas.addEventListener("click", e => {
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top

    if (isSquare) {
        ctx.beginPath()
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

canvas.addEventListener("mousemove", e => {
    if (!isPressed) return

    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top

    ctx.beginPath()
    ctx.arc(x, y, r / 3, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
})

let isPressed = false

canvas.addEventListener("mousedown", () => { isPressed = true })
canvas.addEventListener("mouseup", () => { isPressed = false })
