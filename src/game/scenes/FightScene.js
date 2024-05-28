import { Scene } from 'phaser';

export class FightScene extends Scene{

    constructor(){
        super('FightScene')
    }

    preload(){

    }

    create(){
        this.add.text(500,100,"hola")
        this.add.rectangle(100,100,100,100,0xffffff,1)
    }



}