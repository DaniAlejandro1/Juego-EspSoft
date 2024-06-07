import Phaser from "phaser";
import { Scene } from "phaser";
import { SCENE_KEYS } from "./scene-keys";
import { BACKGROUND_ASSETS_KEYS, CHARACTER_ASSETS_KEYS, HEALTHBAR_ASSETS } from "../../../public/assets/assets-keys";

export class Preloader extends Scene{
    constructor(){
        super({
            key: SCENE_KEYS.PRELOAD_SCENE
        })
       
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
        

        // HealtBar

        // Fondo
        this.load.image( 
            HEALTHBAR_ASSETS.FONDO,
            '/assets/health_bar/HealthBar.png'
        )

        // Relleno
        this.load.image(
            HEALTHBAR_ASSETS.RELLENO,
            '/assets/health_bar/Health.png'
        )

        // Character assets
        
        // Fire Warrior 
        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.IDLE,
            'public/assets/character/Fire_Warrior/states/Fire_Warrior-Sheet-Idle.png',
            {frameWidth:31, frameHeight: 47,spacing: 113}

        )

        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.RUN,
            'public/assets/character/Fire_Warrior/states/Fire_Warrior-Sheet-Run.png',
            {frameWidth:33, frameHeight: 47,spacing:111}

        )
        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.ATTACK,
            'public/assets/character/Fire_Warrior/states/Fire_Warrior-Sheet-Attack.png',
            {frameWidth:70, frameHeight: 47,spacing:80}

        )

        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.RECIVE_ATTACK,
            'public/assets/character/Fire_Warrior/states/Fire_Warrior-Sheet-Recive_Attack.png',
            {frameWidth:31, frameHeight: 47,spacing:113}

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
            {frameWidth:47, frameHeight: 46}
        )

        // Jump Assets
        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.VIKING.JUMP,
            'public/assets/character/Viking/States/Viking-Sheet-Jump.png',
            {frameWidth: 46, frameHeight: 46}
        )

        // Recive Attack
        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.VIKING.RECIVE_ATTACK,
            '/assets/character/Viking/States/Viking-Sheet-ReciveAttack.png',
            {frameWidth:35, frameHeight: 45}
        )

        // DEFEATED
        this.load.spritesheet(
            CHARACTER_ASSETS_KEYS.VIKING.DEFEATED,
            '/assets/character/Viking/States/Viking-Sheet-Defeated.png',
            {frameWidth: 55, frameHeight: 45}

        )
    }

    create(){
        this.scene.start(SCENE_KEYS.FIGHT_SCENE)
    }
}