class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);

        //Is the rocket firing??
        this.isFiring = false;
    }

    update(){
        //left & right
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= 45){
                this.x -= 2; //Should set player speed instead of two
            }
            else if(keyRIGHT.isDown && this.x <= 580){
                this.x += 2; //Should set player speed instead of two
            }
        }
        //firing (YES SpaceBar)
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.isFiring = true;
        }
        //moving when fired
        if(this.isFiring && this.y >= 108) {
            this.y -=10;
        }

        //reset miss
        if(this.y <=108){
            this.isFiring = false;
            this.y = 431;
            this.x = 320;//reest to center
        }

    }
}