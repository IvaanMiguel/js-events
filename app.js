const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const canvasBounds = canvas.getBoundingClientRect()

ctx.fillStyle = "rgba(60, 179, 113, .5)"

canvas.addEventListener("click", e => {
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top

    ctx.beginPath()
    ctx.arc(x, y, 50, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
})

const getRandomRGBA = () => Math.floor(Math.random() * 255);

canvas.addEventListener("mouseover", () => {
    const r = getRandomRGBA()
    const g = getRandomRGBA()
    const b = getRandomRGBA()
    const a = Math.random().toFixed(1)

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
})
