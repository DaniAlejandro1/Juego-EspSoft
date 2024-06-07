import { Scene } from "phaser";

export class SelectChara extends Scene{
    constructor(){
        super('SelectChara')

    }

    create(){
        this.add.text(this.cameras.main.width/2,100,"Selecciona luchador",{
            fontSize: 40
        }).setOrigin(0.5,0)
    }

}