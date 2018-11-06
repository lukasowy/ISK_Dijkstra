var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')


function randomCircle(){
    window.radius = Math.random()  * 3 + 2
    window.x = Math.random() * (innerWidth - radius * 2) + radius
    window.y = Math.random() * (innerHeight - radius * 2) + radius
    window.dx = (Math.random() - 0.5) * 5
    window.dy = (Math.random() - 0.5) * 5
}

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40

var colorArray = [
    '#4B0082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#9400D3',
    '#FF7F00',
    '#FF0000'

]

window.addEventListener('mousemove', function(e){
    mouse.x = e.x
    mouse.y = e.y
})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
} )

class Circle{
    constructor(x, y, dx, dy, radius){
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.minRadius = radius
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    }

    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        c.fillStyle = this.color
        c.fill()
    }

    showCircle(){
        
    if(this.x + this.radius >= innerWidth || this.x - this.radius <= 0){
        this.dx = -this.dx
    }
    if(this.y + this.radius >= innerHeight || this.y - this.radius <= 0){
        this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy
    
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y -this.y > -50){
        this.radius+=1
        if(this.radius < maxRadius){
            this.radius+=1
        } if(this.radius > maxRadius){
            this.radius-=1
        }
    } else if(this.radius > this.minRadius){
        this.radius-=1
    } 
    this.draw()
    }
    
}


var circleArray = []

function init(){
    circleArray = []
    for (let index = 0; index < 1500; index++) {
        randomCircle()
        circleArray.push(new Circle(x, y, dx, dy, radius))
        
    }
}

function animate(){
    requestAnimationFrame(animate)
    
    c.clearRect(0,0,innerWidth, innerHeight)

   
    for (let index = 0; index < circleArray.length; index++) {
       
        circleArray[index].showCircle()
        
    }
}
init()
animate()
