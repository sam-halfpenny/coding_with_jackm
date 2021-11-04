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