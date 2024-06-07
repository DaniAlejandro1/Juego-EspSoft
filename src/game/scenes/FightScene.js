import { Scene } from 'phaser';
import { BACKGROUND_ASSETS_KEYS, CHARACTER_ASSETS_KEYS } from '../../../public/assets/assets-keys';
import { Character } from './Chara/Character';


export class FightScene extends Scene{

    constructor(){
        super('FightScene')
    }

    preload(){

    }

    init(data){
        this.chara1 = data.jugador1
        this.chara2 = data.jugador2
    }
    
    create(){
        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FOREST).setScale(2.1)
        
        this.piso = this.physics.add.staticBody(0,this.scale.height-30,this.scale.width,20)
        

        
        //this.viking = new Character(this,300,this.scale.height-120,CHARACTER_ASSETS_KEYS.VIKING,100,100,10,'left');
        //this.viking2 = new Character(this,1400,this.scale.height-120,CHARACTER_ASSETS_KEYS.FIRE_WARRIOR,100,100,10,'right')

        
        this.jugador1 = new Character(this,300,this.scale.height-120,this.chara1,100,100,10,'left');
        this.jugador2 = new Character(this,1400,this.scale.height-120,this.chara2,100,100,10,'right')

        this.physics.add.collider(this.jugador1.sprite,this.piso)
        this.physics.add.collider(this.jugador2.sprite,this.piso)
        
        

        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FLOOR).setScale(2.1)
        
        this.input.keyboard.on('keydown-D',()=>{
            if(!this.jugador1.isDead){

                this.jugador1.ORIENTATION = 'left'
                this.jugador1.run()
            }
            
        })

        this.input.keyboard.on('keyup-D',()=>{
            if(!this.jugador1.isDead)
            this.jugador1.idle()
        })

        this.input.keyboard.on('keydown-A',()=>{
            if(!this.jugador1.isDead){
                this.jugador1.ORIENTATION = 'right'
                this.jugador1.run()

            }
        })

        this.input.keyboard.on('keyup-A',()=>{
            if(!this.jugador1.isDead)
            this.jugador1.idle()
        })

        
        this.input.keyboard.on('keydown-G',()=>{
            if(!this.jugador1.isDead){

                this.jugador1.attack()
                if(this.physics.collide(this.jugador1.attackHitbox,this.jugador2.sprite)){
                    this.jugador2.recibirDanio(this.jugador1.damage)
                }
            }
           
        })



        // Movimientos del segundo personaje
        this.input.keyboard.on('keydown-LEFT',()=>{

            if(!this.jugador2.isDead){

                this.jugador2.ORIENTATION = 'left'
                this.jugador2.run()
            }
            
        })

        this.input.keyboard.on('keyup-LEFT',()=>{
            if(!this.jugador2.isDead)this.jugador2.idle()
        })

        this.input.keyboard.on('keydown-RIGHT',()=>{
            if(!this.jugador2.isDead){

                this.jugador2.ORIENTATION = 'right'
                this.jugador2.run()
            }
        })

        this.input.keyboard.on('keyup-RIGHT',()=>{
            if(!this.jugador2.isDead){

                this.jugador2.idle()
            }
        })

        

        this.input.keyboard.on('keydown-M',()=>{
            if(!this.jugador2.isDead){

                this.jugador2.attack()
                if (this.physics.overlap(this.jugador1.sprite,this.jugador2.attackHitbox)){
    
                    this.jugador1.recibirDanio(this.jugador2.damage)
                }
            }
           
        })

        

       
        
    }

    
    update(){
       
            
            
            
        
    }

}

