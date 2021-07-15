window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
class dodger{
    constructor(gamewidth,gameheight){
        this.gameheight=gameheight
        this.gamewidth=gamewidth
        this.position={x:GAME_WIDTH/2,y:GAME_HEIGHT/2}
        this.speed={x:0,y:0}
        this.size=50
        this.maxSpeed=10
        this.x = false
    }
    draw(ctx){
        ctx.fillStyle = '#0ff'
        ctx.fillRect(this.position.x,this.position.y,this.size,this.size)
    }
    moveLeft(){
        this.speed.x = -this.maxSpeed
    }
    moveRight(){
        this.speed.x = this.maxSpeed
    }
    moveup(){
        this.speed.y = -this.maxSpeed
    }
    movedown(){
        this.speed.y = this.maxSpeed
    }
    stopx(){
        this.speed.x=0;
    }
    stopy(){
        this.speed.y=0
    }
    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if(this.position.x<0) {
            this.position.x=0
            console.log('YOU LOSE')
            this.x = true
        }
        if(this.position.x + this.size > 800) {
            this.position.x = 800 - this.size;
            console.log('YOU LOSE')
            this.x = true
        }
        if(this.position.y<0) {
            this.position.y=0;
            console.log('YOU LOSE')
            this.x = true
        }
        if(this.position.y + this.size > 600) {
            this.position.y = 600 - this.size;
            console.log('YOU LOSE')
            this.x = true
        }
    }

}
class Handler{
    constructor(dodger) {
        document.addEventListener("keydown", event=> {
            switch (event.keyCode) {
                case 37:
                    dodger.moveLeft()
                    break;
                case 39:
                    dodger.moveRight()
                    break;
                case 38:
                    dodger.moveup()
                    break
                case 40:
                    dodger.movedown()
                    break
            }
        });
        document.addEventListener("keyup", event=> {
            switch (event.keyCode) {
                case 37:
                    if(dodger.speed.x<0){
                        dodger.stopx()
                    }
                    break
                case 39:
                    if(dodger.speed.x>0){
                        dodger.stopx()
                    }
                    break;
                case 38:
                    if(dodger.speed.y<0){
                        dodger.stopy()
                    }
                    break
                
                case 40:
                    if(dodger.speed.y>0){
                        dodger.stopy()
                    }
                    break
            }
        });

    }
}

let canvas = document.getElementById("gamescreen")
let ctx = canvas.getContext('2d')

const GAME_WIDTH=800
const GAME_HEIGHT=600

dodger1 = new dodger(GAME_WIDTH,GAME_HEIGHT)
new Handler(dodger1);

function gameloop(timestamp) {
    ctx.clearRect(0,0,800,600);
    dodger1.update();
    dodger1.draw(ctx);
    if (!dodger1.x){
        requestAnimationFrame(gameloop)
    }
}
requestAnimationFrame(gameloop)