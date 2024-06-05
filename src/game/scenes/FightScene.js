import { Scene } from 'phaser';
import { BACKGROUND_ASSETS_KEYS, CHARACTER_ASSETS_KEYS } from '../../../public/assets/assets-keys';
import { Character } from './Chara/Character';


export class FightScene extends Scene{

    constructor(){
        super('FightScene')
    }

    preload(){

    }

    create(){
        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FOREST).setScale(2.1)
        
        this.piso = this.physics.add.staticBody(0,this.scale.height-30,this.scale.width,20)
        

        
        this.viking = new Character(this,200,this.scale.height-120,CHARACTER_ASSETS_KEYS.VIKING,100,100,10,'left');
        this.viking2 = new Character(this,800,this.scale.height-120,CHARACTER_ASSETS_KEYS.VIKING,100,100,10,'right')


        this.physics.add.collider(this.viking.sprite,this.piso)
        this.physics.add.collider(this.viking2.sprite,this.piso)
        
        this.physics.add.overlap(this.viking.attackHitbox,this.viking2.attackHitbox)

        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FLOOR).setScale(2.1)
        
        this.input.keyboard.on('keydown-D',()=>{
            this.viking.ORIENTATION = 'left'
            this.viking.run()
            
        })

        this.input.keyboard.on('keyup-D',()=>{
            this.viking.idle()
        })

        this.input.keyboard.on('keydown-A',()=>{
            this.viking.ORIENTATION = 'right'
            this.viking.run()
        })

        this.input.keyboard.on('keyup-A',()=>{
            this.viking.idle()
        })

        
        this.input.keyboard.on('keydown-G',()=>{
            
            this.viking.attack()
            if(this.physics.collide(this.viking.attackHitbox,this.viking2.sprite)){
                this.viking2.recibirDanio(this.viking.damage)
            }
           
        })



        // Movimientos del segundo personaje
        this.input.keyboard.on('keydown-LEFT',()=>{
            this.viking2.ORIENTATION = 'left'
            this.viking2.run()
            
        })

        this.input.keyboard.on('keyup-LEFT',()=>{
            this.viking2.idle()
        })

        this.input.keyboard.on('keydown-RIGHT',()=>{
            this.viking2.ORIENTATION = 'right'
            this.viking2.run()
        })

        this.input.keyboard.on('keyup-RIGHT',()=>{
            this.viking2.idle()
        })

        

        this.input.keyboard.on('keydown-M',()=>{

            this.viking2.attack()
            if (this.physics.overlap(this.viking.sprite,this.viking2.attackHitbox)){

                this.viking.recibirDanio(this.viking2.damage)
            }
           
        })

        

       
        
    }

    
    update(){
       
            
            
            
        
    }

}

