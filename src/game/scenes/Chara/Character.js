import { CHARACTER_ASSETS_KEYS, HEALTHBAR_ASSETS } from "../../../../public/assets/assets-keys"



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

        this.hasPlayedFinalSound = false;

        let hitboxX = this.x + (this.ORIENTATION === 'right' ? -20 : 20);
        let hitboxY = this.y;

        this.attackHitbox = this.scene.add.rectangle(hitboxX, hitboxY, 140, 200, 0xff0000, 0);

        this.sprite = scene.physics.add.sprite(x, y, this.ASSET_KEY.IDLE).setScale(4).setCollideWorldBounds(true);
        
        if(this.ORIENTATION == 'right'){
            this.sprite.flipX = true
        }
        
        this.createAnimation(scene)
        this.createHealthBar(scene)

        this.idle()
        this.speed = 270
        this.health = health
        this.currentHealth = currentHealth
        this.isRuning = false
        this.isAttacking = false
        this.isJumping = false
        this.isIdle = true
        this.isDead = false 
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
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.RUN, {start: 0, end: 6}),
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
            frameRate: 4,
            repeat: 0
        });
        
        scene.anims.create({
            key: this.ASSET_KEY.RECIVE_ATTACK,
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.RECIVE_ATTACK, { start: 0, end: 3 }),
            frameRate: 12,
            repeat: 0
        })

        scene.anims.create({
            key: this.ASSET_KEY.DEFEATED ,
            frames: scene.anims.generateFrameNumbers(this.ASSET_KEY.DEFEATED, { start: 0, end: 11 }),
            frameRate: 12,
            repeat: 0
        })


        this.sprite.on('animationcomplete', ()=>{
            if(this.isAttacking && this.isRuning && !this.isDead){
                this.attackHitbox.destroy()
                this.isAttacking = false
                this.isIdle = false
                this.isRuning = false
                this.run()
            }

            if(this.isAttacking && this.idle && !this.isDead){
                this.attackHitbox.destroy()
                this.isAttacking = false
                this.isIdle = true
                this.idle()
            }
            if(!this.isDead){
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
           
            this.sprite.setVelocityX(0);
            this.sprite.play(this.ASSET_KEY.IDLE);
        }else if(this.isAttacking){
            this.isRuning = false
            this.isIdle = true
            
        }
    }

    run(){

        if(this.POSITION == 'left'){

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
        }else{
                if(!this.isRuning && !this.isAttacking){
                this.isRuning = true
                if(this.ORIENTATION === 'left' ){
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
        if (!this.isAttacking){
            if(this.ASSET_KEY === CHARACTER_ASSETS_KEYS.VIKING){

                if(this.POSITION === 'right'){
                    let hitboxY = this.sprite.y;
                    let hitboxX = this.sprite.x + (this.ORIENTATION === 'right' ? 20 : -20);
                    this.attackHitbox = this.scene.add.rectangle(hitboxX, hitboxY, 140, 200, 0xff0000, 0.1);
                    this.scene.physics.add.existing(this.attackHitbox);
                    this.attackHitbox.body.setAllowGravity(false);
                }else{
                    let hitboxY = this.sprite.y;
                    let hitboxX = this.sprite.x + (this.ORIENTATION === 'right' ? -20 : 20);
                    this.attackHitbox = this.scene.add.rectangle(hitboxX, hitboxY, 140, 200, 0xff0000, 0.1);
                    this.scene.physics.add.existing(this.attackHitbox);
                    this.attackHitbox.body.setAllowGravity(false);
                }
            }
            if(this.ASSET_KEY === CHARACTER_ASSETS_KEYS.FIRE_WARRIOR){
                if(this.POSITION === 'right'){
                    let hitboxY = this.sprite.y;
                    let hitboxX = this.sprite.x + (this.ORIENTATION === 'right' ? 70 : -70);
                    this.attackHitbox = this.scene.add.rectangle(hitboxX, hitboxY, 140, 200, 0xff0000, 0.1);
                    this.scene.physics.add.existing(this.attackHitbox);
                    this.attackHitbox.body.setAllowGravity(false);
                }else{
                    let hitboxY = this.sprite.y;
                    let hitboxX = this.sprite.x + (this.ORIENTATION === 'right' ? -70 : 70);
                    this.attackHitbox = this.scene.add.rectangle(hitboxX, hitboxY, 140, 200, 0xff0000, 0.1);
                    this.scene.physics.add.existing(this.attackHitbox);
                    this.attackHitbox.body.setAllowGravity(false);
                }
            }
            this.isAttacking = true
            this.sprite.setVelocityX(0);
            this.playAnimation(this.ASSET_KEY.ATTACK);

            
        }
    }

    defeated(){
        if(!this.isDead){

            this.isDead = true    
            this.sprite.body.enable = false

             
            this.playAnimation(this.ASSET_KEY.DEFEATED)
        }
    }
    
    recibirDanio(danio) {

        this.currentHealth -= danio;
        if (this.currentHealth <= 0) {
            
            this.currentHealth = 0

            let newWidth = this.calcularAnchoBarra(this.currentHealth, this.health, 487); // 487 es el ancho máximo de la barra de salud
            console.log('new width: ' + newWidth);
            this.healthFill.displayWidth = newWidth; 
            
            this.defeated()
        }else{
            
            // Calcular el nuevo ancho basado en la salud actual
            let newWidth = this.calcularAnchoBarra(this.currentHealth, this.health, 487); // 487 es el ancho máximo de la barra de salud
            console.log('new width: ' + newWidth);
            this.healthFill.displayWidth = newWidth; // Actualizar el ancho de la barra de salud
            this.playAnimation(this.ASSET_KEY.RECIVE_ATTACK)
            
        }
        
    
    }
    
    calcularAnchoBarra(currentHealth, totalHealth, maxWidth) {
        return (currentHealth / totalHealth) * maxWidth;
    }
    



    createHealthBar(scene) {
        if (this.POSITION === 'left'){
            // Agrega el nombre del personaje ensima de la barra de vida
            this.scene.add.text(110, 10,this.ASSET_KEY.NAME,{
                fontSize: 30
            })

            // Contorno de la barra de salud
            this.healthBar = scene.add.image(100, 50, HEALTHBAR_ASSETS.FONDO).setOrigin(0, 0);
            this.healthBar.displayWidth = 610;
            this.healthBar.displayHeight = 30;
        
            // Relleno de la barra de salud
            this.healthFill = scene.add.image(161, 65, HEALTHBAR_ASSETS.RELLENO).setOrigin(0, 0.5);
            this.healthFill.displayWidth = 487; // Ancho máximo inicial
            this.healthFill.displayHeight = 13;
        
        } else{
            //  Agrega el nombre del personaje ensima de la barra de vida
            this.scene.add.text(1340, 10,this.ASSET_KEY.NAME,{
                fontSize: 30
            })
            // Contorno de la barra de salud
            this.healthBar = scene.add.image(950, 50, HEALTHBAR_ASSETS.FONDO).setOrigin(0, 0);
            this.healthBar.displayWidth = 610;
            this.healthBar.displayHeight = 30;
        
            // Relleno de la barra de salud
            this.healthFill = scene.add.image(1500, 65, HEALTHBAR_ASSETS.RELLENO).setOrigin(1, 0.5);
            this.healthFill.displayWidth = 487; // Ancho máximo inicial
            this.healthFill.displayHeight = 13;
        }
    }

        


    
    

    
}