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
        
        //let prueba = this.add.rectangle(this.scale.width/2,this.scale.height/5,200,200,0xffff01,1)
        
        
        
        
        
        
        this.piso = this.physics.add.staticBody(0,this.scale.height-30,this.scale.width,20)
        
        
        this.viking2 = new Character(this,200,this.scale.height-120,CHARACTER_ASSETS_KEYS.VIKING,100,100,100,'left');
        
        this.physics.add.collider(this.viking2.sprite,this.piso)
        
        
        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FLOOR).setScale(2.1)
       
    }



}