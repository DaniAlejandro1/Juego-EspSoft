


export class Character{

    constructor(scene,x,y,assetKey,health,currentHealth,damage,position){

        this.scene = scene
        this.x = x
        this.y = y
        this.ASSET_KEY = assetKey
        this.health = health
        this.currentHealth = currentHealth
        this.damage = damage
        this.POSITION = position
        this.ORIENTATION = position
        
        this.sprite = scene.physics.add.sprite(x, y, this.ASSET_KEY.IDLE).setScale(4);
        
        if(this.ORIENTATION == 'right'){
            this.sprite.flipX = true
        }
        
        this.createAnimation(scene)
        this.createHealthBar(scene)

        this.sprite.play(this.ASSET_KEY.IDLE)
        this.speed = 270
        this.health = 100
        this.currentHealth = 100
        this.isRuning = false
        this.isAttacking = false
        this.isJumping = false
        this.isIdle = true
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
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.RUN, {frames:[0,1,2,3,4,5,6,0,1,2,3,4,5]}),
            frameRate: 14,
            repeat: -1
        });
        scene.anims.create({
            key: this.ASSET_KEY.ATTACK,
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.ATTACK, { start: 0, end: 3 }),
            frameRate: 14,
            repeat: 0
        });

        scene.anims.create({
            key: this.ASSET_KEY.JUMP,
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.JUMP, { start: 0, end: 3 }),
            frameRate: 1,
            repeat: 0
        });
        this.sprite.on('playAnimation',()=>{

        })
        this.sprite.on('animationcomplete', ()=>{
            if(this.isAttacking && this.isRuning){
                this.attackHitbox.destroy()
                this.isAttacking = false
                this.isIdle = false
                this.isRuning = false
                this.run()
            }

            if(this.isAttacking && this.idle){
                this.attackHitbox.destroy()
                this.isAttacking = false
                this.isIdle = true
                this.idle()
            }

    
            
            
        });

    }
    playAnimation(animationKey) {
        
        this.sprite.play(animationKey,true);
    }
    
    idle(){

        if(!this.isAttacking ){
            this.isJumping = false
            this.isRuning = false
            this.isAttacking = false
            this.sprite.setVelocityX(0);
            this.sprite.play(this.ASSET_KEY.IDLE);
        }else if(this.isAttacking){
            this.isRuning = false
            this.isIdle = true
            
        }
    }

    run(){

            if(!this.isRuning && !this.isAttacking){
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

    attack(){
        if (!this.isAttacking){

            this.isAttacking = true
            this.sprite.setVelocityX(0);
            this.playAnimation(this.ASSET_KEY.ATTACK);
    
            let hitboxX = this.sprite.x + (this.ORIENTATION === 'right' ? -20 : 20);
            let hitboxY = this.sprite.y;
    
            this.attackHitbox = this.scene.add.rectangle(hitboxX, hitboxY, 140, 200, 0xff0000, 0.1);
            this.scene.physics.add.existing(this.attackHitbox);
            this.attackHitbox.body.setAllowGravity(false);
            
        }
    }
    
    recibirDanio(danio) {
        this.currentHealth -= danio;
        if (this.currentHealth < 0) this.currentHealth = 0;
        console.log("current health: " + this.currentHealth);
        const newWidth = this.calcularAnchoBarra(this.currentHealth, this.health, 700);
        this.scene.tweens.add({
            targets: this.healthFill,
            width: newWidth,
            duration: 200,
            ease: Phaser.Math.Easing.Sine.Out,
            repeat: 0,
        });

        console.log("current health: " + this.currentHealth);
    }

    calcularAnchoBarra(currentHealth, totalHealth, maxWidth) {
        return (currentHealth / totalHealth) * maxWidth;
    }


    createHealthBar(scene) {
        const barWidth = 100;
        const barHeight = 40;
        const barX = 100;
        const barY = 20;

        // Fondo de la barra de salud
        this.healthbar = scene.add.graphics();
        this.healthbar.fillStyle(0xff0000, 0.3);
        this.healthbar.fillRect(barX, barY, barWidth, barHeight);

        // Relleno de la barra de salud
        this.healthFill = scene.add.graphics();
        this.healthFill.fillStyle(0x00ff00, 1);
        this.healthFill.fillRect(barX, barY, barWidth, barHeight);
        
        
    }


    
    

    
}