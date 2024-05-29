


export class Character{

    constructor(scene,x,y,assetKey,health,currentHealth,damage,orientation){

        this.scene = scene
        this.x = x
        this.y = y
        this.ASSET_KEY = assetKey
        this.health = health
        this.currentHealth = currentHealth
        this.damage = damage
        this.ORIENTATION = orientation
        
        this.sprite = scene.physics.add.sprite(x, y, this.ASSET_KEY.IDLE).setScale(4);
        
        if(this.ORIENTATION == 'right'){
            this.sprite.flipX = true
        }
        
        this.createAnimation(scene)

        this.sprite.play(this.ASSET_KEY.IDLE)
        this.speed = 240
        this.health = 100
        this.currentHealth = 100
        this.isRuning = false
        this.isAttacking = false
    }

    createAnimation(scene){
        scene.anims.create({
            key: this.ASSET_KEY.IDLE,
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.IDLE, { start: 0, end: 6 }),
            frameRate: 7,
            repeat: -1
        });
        scene.anims.create({
            key: this.ASSET_KEY.RUN,
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.RUN, { start: 0, end: 6 }),
            frameRate: 7,
            repeat: -1
        });
        scene.anims.create({
            key: this.ASSET_KEY.ATTACK,
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.ATTACK, { start: 0, end: 3 }),
            frameRate: 4,
            repeat: 0
        });

        scene.anims.create({
            key: this.ASSET_KEY.JUMP,
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.JUMP, { start: 0, end: 3 }),
            frameRate: 4,
            repeat: 0
        });
        
        this.sprite.on('animationcomplete', ()=>{
            if(this.attackHitbox){

                this.attackHitbox.destroy()
                this.isAttacking = false
                if(this.isRuning){
                    this.isRuning = true
                    if(this.ORIENTATION === 'right' ){
                        this.sprite.flipX = true
                        this.sprite.setVelocityX(-this.speed)
                    }else{
                        this.sprite.flipX = false
                        this.sprite.setVelocityX(this.speed)
                        
                    }
        
                    this.sprite.play(this.ASSET_KEY.RUN)
    
                }else{
                    this.idle()
                }
            }
        });

    }
    playAnimation(animationKey) {
        
        this.sprite.play(animationKey,true);
    }
    
    idle(){

        if(!this.isAttacking){
            
            this.isRuning = false
            this.isAttacking = false
            this.sprite.setVelocityX(0);
            this.sprite.play(this.ASSET_KEY.IDLE);
        }
    }

    run(){
        if(!this.isAttacking){

            if(!this.isRuning){
                this.isRuning = true
                if(this.ORIENTATION === 'right' ){
                    this.sprite.flipX = true
                    this.sprite.setVelocityX(-this.speed)
                }else{
                    this.sprite.flipX = false
                    this.sprite.setVelocityX(this.speed)
                    
                }
    
                this.sprite.play(this.ASSET_KEY.RUN)
            }
        }
    }

    attack(){
        this.isAttacking = true
        this.sprite.setVelocityX(0);
        this.playAnimation(this.ASSET_KEY.ATTACK);

        let hitboxX = this.sprite.x + (this.ORIENTATION === 'right' ? -20 : 20);
        let hitboxY = this.sprite.y;

        this.attackHitbox = this.scene.add.rectangle(hitboxX, hitboxY, 140, 200, 0xff0000, 0.5);
        this.scene.physics.add.existing(this.attackHitbox);
        this.attackHitbox.body.setAllowGravity(false);
        
    }

    jump(){
       
            this.playAnimation(this.ASSET_KEY.JUMP)
            this.sprite.setVelocityY(-200)
        
        
    }
    
    

    
}