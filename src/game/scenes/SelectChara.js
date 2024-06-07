import { Scene } from "phaser";
import { SCENE_KEYS } from "./scene-keys";
import { BACKGROUND_ASSETS_KEYS, CHARACTER_ASSETS_KEYS } from "../../../public/assets/assets-keys";

export class SelectChara extends Scene{
    constructor(){
        super('SelectChara')

    }

    create(){

        
        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FOREST).setScale(2.1)
        this.add.text(this.cameras.main.width/2,100,"Selecciona luchador",{
            fontSize: 40
        }).setOrigin(0.5,0)

        
        this.add.text((this.cameras.main.width/7) * 1,(this.cameras.main.height/4)*1,"JUGADOR 1",{
            fontSize: 40
        })

        this.add.text((this.cameras.main.width/7) * 5,(this.cameras.main.height/4)*1,"JUGADOR 2",{
            fontSize: 40
        })
   
        
        this.VikingPortrait = this.add.image(this.cameras.main.width/2 - 200, this.cameras.main.height / 2 + 50, CHARACTER_ASSETS_KEYS.VIKING.PORTRAIT).setScale(2)
        this.add.graphics()
            .lineStyle(2, 0xffffff,1)
            .strokeRect(this.cameras.main.width/2 - 260, this.cameras.main.height / 2-10,this.VikingPortrait.width*2,this.VikingPortrait.height*2)
            

        this.WarriorPortrait = this.add.image(this.cameras.main.width/2 + 200, this.cameras.main.height / 2 + 50, CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.PORTRAIT).setScale(2)
        this.add.graphics()
            .lineStyle(2, 0xffffff,1)
            .strokeRect(this.cameras.main.width/2 + 130, this.cameras.main.height / 2-10,this.WarriorPortrait.width*2,this.WarriorPortrait.height*2)    

        

        this.Jugador1Sprite =  this.add.sprite((this.cameras.main.width/7) * 1 + 110,300, "").setScale(5).setOrigin(0.5,0).setVisible(false)
        

        //this.mostrarAnimacion(CHARACTER_ASSETS_KEYS.VIKING.IDLE,this.Jugador1Sprite)










    }

    mostrarAnimacion(chara,sprite){
    
        this.anims.create({
            key: chara,
            frames: this.anims.generateFrameNumbers(chara, { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
        sprite.setVisible(true)
        sprite.play(chara)
    }

}