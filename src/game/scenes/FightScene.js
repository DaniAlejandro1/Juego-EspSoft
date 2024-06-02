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
        
        
        this.attackHitbox = this.add.rectangle(0, 0, 80, 20, 0xff0000, 0.5);
        this.physics.add.existing(this.attackHitbox);
        this.attackHitbox.body.setAllowGravity(false);

        this.attackHitbox.destroy()

        
        
        
        
        this.piso = this.physics.add.staticBody(0,this.scale.height-30,this.scale.width,20)
        

        
        this.viking = new Character(this,200,this.scale.height-120,CHARACTER_ASSETS_KEYS.VIKING,100,100,10,'left');
        this.viking2 = new Character(this,800,this.scale.height-120,CHARACTER_ASSETS_KEYS.VIKING,100,100,10,'right')


        this.physics.add.collider(this.viking.sprite,this.piso)
        this.physics.add.collider(this.viking2.sprite,this.piso)
        
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
           
        })

        this.input.keyboard.on('keydown-M',()=>{
            
            this.viking.recibirDanio(this.viking2.damage)
           
        })

        

       
        
    }

    
    update(){
       
            
            
            
        
    }

}

