var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

function randomCircle(){
    window.radius = 30
    window.x = Math.random() * (innerWidth - radius * 2) + radius
    window.y = Math.random() * (innerHeight - radius * 2) + radius
    window.dx = (Math.random() - 0.5) * 30
    window.dy = (Math.random() - 0.5) * 30
}

class Circle{
    constructor(x, y, dx, dy, radius){
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
    }

    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        c.fillStyle = 'orangered'
        c.strokeStyle = 'red'
        c.fill()
        c.stroke()
    }

    showCircle(){
        
    this.draw()
    if(this.x + this.radius >= innerWidth || this.x - this.radius <= 0){
        this.dx = -this.dx
    }
    if(this.y + this.radius >= innerHeight || this.y - this.radius <= 0){
        this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy
    }
}

randomCircle()
var circle = new Circle(x, y, dx, dy, radius)

randomCircle()
var circle2 = new Circle(x, y, dx, dy, radius)

function animate(){
    requestAnimationFrame(animate)
    
    c.clearRect(0,0,innerWidth, innerHeight)

    circle.showCircle()

    circle2.showCircle()
}

animate()
