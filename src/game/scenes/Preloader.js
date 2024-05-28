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
            '/assets/background/Layer_0000_9.png'
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
        this.scene.start(SCENE_KEYS.FIGHT_SCENE)
    
    }
}