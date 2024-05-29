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
        
        // Fire Warrior 
        this.load.image(
            CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.IDLE,
            '/assets/character/Fire_Warrior/Fire_Warrior/Fire_Warrior-Sheet.png'
        )


        // Viking
        
        // Idle Sprite
        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.VIKING.IDLE,
            'public/assets/character/Viking/States/Viking-Sheet-Idle.png',
            {frameWidth:31, frameHeight: 45,spacing: 84})
        
        // Run Sprite
        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.VIKING.RUN,
            'public/assets/character/Viking/States/Viking-Sheet-Running.png',
            {frameWidth:35, frameHeight: 45,spacing: 80})

        // Attact Assets
        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.VIKING.ATTACK,
            'public/assets/character/Viking/States/Viking-Sheet-attack.png',
            {frameWidth:47, frameHeight: 46, spacing: 0}
        )
    }

    create(){
        this.scene.start(SCENE_KEYS.FIGHT_SCENE)
    
    }
}