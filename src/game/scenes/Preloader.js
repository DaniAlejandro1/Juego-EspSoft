import Phaser from "phaser";
import { Scene } from "phaser";
import { SCENE_KEYS } from "./scene-keys";
import { BACKGROUND_ASSETS_KEYS, CHARACTER_ASSETS_KEYS } from "../../../public/assets/assets-keys";

export class Preloader extends Scene{
    constructor(){
        super({
            key: SCENE_KEYS.PRELOAD_SCENE
        })
        console.log(SCENE_KEYS.PRELOAD_SCENE)
    }

    preload(){

        // Background assets
        this.load.image(
            BACKGROUND_ASSETS_KEYS.FOREST,
            '/assets/background/Background.png'
        
        )

        this.load.image(
            BACKGROUND_ASSETS_KEYS.FLOOR,
            '/assets/background/Layer_0001_8.png'
        )
        

        // Character assets
        this.load.image(
            CHARACTER_ASSETS_KEYS.VIKING,
            '/assets/character/Viking/Viking-Sheet.png'
        )

        this.load.image(
            CHARACTER_ASSETS_KEYS.FIRE_WARRIOR,
            '/assets/character/Fire_Warrior/Fire_Warrior/Fire_Warrior-Sheet.png'
        )
    }
    create(){
        this.add.image(this.scale.width/2,this.scale.height/5,BACKGROUND_ASSETS_KEYS.FOREST).setScale(1.6)
        this.add.rectangle(0,0,200,200,0x0,1)
       
    }
}