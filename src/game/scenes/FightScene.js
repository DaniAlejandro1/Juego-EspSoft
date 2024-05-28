import { Scene } from 'phaser';
import { BACKGROUND_ASSETS_KEYS } from '../../../public/assets/assets-keys';


export class FightScene extends Scene{

    constructor(){
        super('FightScene')
    }

    preload(){

    }

    create(){
        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FOREST).setScale(2.1)
        
        let piso = this.physics.add.staticBody(0,this.scale.height-30,this.scale.width,20)
        let prueba = this.add.rectangle(this.scale.width/2,this.scale.height/5,200,200,0xffff01,1)
        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FLOOR).setScale(2.1)
        
        this.physics.add.existing(prueba)
        this.physics.add.collider(prueba,piso)
        
       
    }



}