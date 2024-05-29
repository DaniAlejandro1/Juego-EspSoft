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
        

        
        this.viking = new Character(this,200,this.scale.height-120,CHARACTER_ASSETS_KEYS.VIKING,100,100,100,'left');
        
        this.physics.add.collider(this.viking.sprite,this.piso)
        
        
        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FLOOR).setScale(2.1)
        
        this.input.keyboard.on('keydown-D',()=>{
            this.viking.run()
        })

        this.input.keyboard.on('keyup-D',()=>{
            this.viking.idle()
        })
       
    }

    update(){
       
            
            
            
        
    }

}

