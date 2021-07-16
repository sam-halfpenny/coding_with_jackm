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
        this.position={x:0,y:0}
        this.speed={x:0,y:0}
        this.size=10
        this.history={
            x:[],
            y:[]
        }
        this.size=10
        this.maxSpeed=1
        
        this.x=false
        this.mid=this.size/2
    }
    draw(ctx){
        ctx.fillStyle = '#0ff'
        ctx.fillRect(this.position.x,this.position.y,this.size,this.size)
        this.history.x.push(this.position.x)
        this.history.y.push(this.position.y)
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
    update(deltaTime) {
        if(!deltaTime) return;
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
        //}
        //apple detection{
            if(apple.position.y<(this.position.y+this.size)){
                if(this.position.y + this.size<apple.position.y+apple.size){
                    if(apple.position.x+apple.size > this.position.x+this.size){
                        if(this.position.x+this.size>apple.position.x){
                            apple.relocate()
                            //bottom right
                            this.size+=10
                            this.maxSpeed+=5
                            score++
                        }
                    }
                }
            }
            if(apple.position.y<(this.position.y)){
                if(this.position.y<apple.position.y+apple.size){
                    if(apple.position.x+apple.size > this.position.x+this.size){
                        if(this.position.x+this.size>apple.position.x){
                            apple.relocate()
                            //top right
                            this.size+=10
                            this.maxSpeed+=5
                            score++
                        }
                    }
                }
            }
            if(apple.position.y<(this.position.y)){
                if(this.position.y<apple.position.y+apple.size){
                    if(apple.position.x+apple.size > this.position.x){
                        if(this.position.x>apple.position.x){
                            apple.relocate()
                            //top left
                            this.size+=10
                            this.maxSpeed+=5
                            score++
                        }
                    }
                }
            }
            if(apple.position.y<(this.position.y+this.size)){
                if(this.position.y+this.size<apple.position.y+apple.size){
                    if(apple.position.x+apple.size > this.position.x){
                        if(this.position.x>apple.position.x){
                            apple.relocate()
                            //bottom left
                            this.size+=10
                            this.maxSpeed+=5
                            score++
                        }
                    }
                }
            }
            if(apple.position.y<(this.position.y+this.mid)){
                if(this.position.y + this.mid<apple.position.y+apple.mid){
                    if(apple.position.x+apple.mid > this.position.x+this.mid){
                        if(this.position.x+this.mid>apple.position.x){
                            apple.relocate()
                            //middle
                            this.size+=10
                            this.maxSpeed+=5
                            score++
                        }
                    }
                }
            
            
                
            }
 
    }

}
class apple{
    constructor(gamewidth,gameheight){
        this.gameheight=gameheight
        this.gamewidth=gamewidth
        this.size=10
        this.position={x:(Math.floor(Math.random() * this.gamewidth-this.size)),y:(Math.floor(Math.random() * this.gameheight-this.size))}
        
        this.mid=this.size/2
    }
    draw(ctx){
        ctx.fillStyle = '#000'
        ctx.fillRect(this.position.x,this.position.y,this.size,this.size)
    }
    relocate(){
        this.position={x:(Math.floor(Math.random() * this.gamewidth-this.size)),y:(Math.floor(Math.random() * this.gameheight-this.size))}
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
let score=0
let canvas = document.getElementById("gamescreen")
let ctx = canvas.getContext('2d')

const GAME_WIDTH=800
const GAME_HEIGHT=600

dodger = new dodger(GAME_WIDTH,GAME_HEIGHT)
apple = new apple(GAME_WIDTH,GAME_HEIGHT)
dodger.position.x = GAME_WIDTH/2 - dodger.size/2
dodger.position.y = GAME_HEIGHT/2 - dodger.size/2
new Handler(dodger);

let lastTime = 0
dodger.draw(ctx)

function gameloop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,800,600);
    dodger.update(deltaTime);
    dodger.draw(ctx);
    apple.draw(ctx)
    
    if (!dodger.x){
        requestAnimationFrame(gameloop)
    }
    else{
        console.log(score)
    }
}
requestAnimationFrame(gameloop)