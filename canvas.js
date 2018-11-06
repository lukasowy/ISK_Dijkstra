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

class Node{
    constructor(value){
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.value = value
        this.radius = radius
    }

    addNode(value){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        c.fillStyle = 'orangered'
        c.strokeStyle = 'red'
        c.fillStyle = 'red';
        c.shadowColor = '#999';
        c.shadowBlur = 20;
        c.shadowOffsetX = 1;
        c.shadowOffsetY = 1;
        c.fill()
        c.stroke()
        c.font = '20pt Calibri';
        c.fillStyle = 'black';
        c.fillText(value, this.x - 8, this.y + 5);
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
    }
}


randomCircle()
var node = new Node(1)

function animate(){
    requestAnimationFrame(animate)
    
    c.clearRect(0,0,innerWidth, innerHeight)

    node.addNode(1);
}
animate()
