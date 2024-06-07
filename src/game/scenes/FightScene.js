import { Scene } from 'phaser';
import { BACKGROUND_ASSETS_KEYS, CHARACTER_ASSETS_KEYS, SOUND_EFFECTS } from '../../../public/assets/assets-keys';
import { Character } from './Chara/Character';
import { SCENE_KEYS } from './scene-keys';


export class FightScene extends Scene{

    constructor(){
        super('FightScene')
    }

    preload(){

    }

    init(data){
        this.personajes = data
        this.chara1 = data.jugador1
        this.chara2 = data.jugador2
    }

    create(){
        this.anadirEfectosSonido()
        

        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FOREST).setScale(2.1)
        
        this.piso = this.physics.add.staticBody(0,this.scale.height-30,this.scale.width,20)
        

        
        //this.viking = new Character(this,300,this.scale.height-120,CHARACTER_ASSETS_KEYS.VIKING,100,100,10,'left');
        //this.viking2 = new Character(this,1400,this.scale.height-120,CHARACTER_ASSETS_KEYS.FIRE_WARRIOR,100,100,10,'right')

        
        this.jugador1 = new Character(this,300,this.scale.height-120,this.chara1,100,100,10,'left');
        this.jugador2 = new Character(this,1400,this.scale.height-120,this.chara2,100,100,10,'right')



        this.physics.add.collider(this.jugador1.sprite,this.piso)
        this.physics.add.collider(this.jugador2.sprite,this.piso)
        
        

        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FLOOR).setScale(2.1)
        
        this.input.keyboard.on('keydown-D',()=>{
            if(!this.jugador1.isDead){

                this.jugador1.ORIENTATION = 'left'
                this.jugador1.run()
            }
            
        })

        this.input.keyboard.on('keyup-D',()=>{
            if(!this.jugador1.isDead)
            this.jugador1.idle()
        })

        this.input.keyboard.on('keydown-A',()=>{
            if(!this.jugador1.isDead){
                this.jugador1.ORIENTATION = 'right'
                this.jugador1.run()

            }
        })

        this.input.keyboard.on('keyup-A',()=>{
            if(!this.jugador1.isDead)
            this.jugador1.idle()
        })

        
        this.input.keyboard.on('keydown-G',()=>{
            if(!this.jugador1.isDead && !this.jugador1.isAttacking){
                this.jugador1Golpe.play()
                this.jugador1.attack()
                if(this.physics.collide(this.jugador1.attackHitbox,this.jugador2.sprite)){
                    this.jugador1.ASSET_KEY.EFFECTS.GOLPE
                    this.jugador2.recibirDanio(this.jugador1.damage) 
                }
            }
            if(this.jugador2.isDead){
                if(!this.jugador1.hasPlayedFinalSound){

                    this.jugador1.hasPlayedFinalSound = true
                    this.jugador1GolpeFinal.play()
                    
                }
                
                
                
                
                    
                this.scene.start(SCENE_KEYS.GAME_OVER,{userName:"hola, cambiar por nombre de usuario",charaName: this.jugador1.ASSET_KEY.NAME, chara: this.jugador1,personajes: this.data})
               
                    
            }
           
        })



        // Movimientos del segundo personaje
        this.input.keyboard.on('keydown-LEFT',()=>{

            if(!this.jugador2.isDead){

                this.jugador2.ORIENTATION = 'left'
                this.jugador2.run()
            }
            
        })

        this.input.keyboard.on('keyup-LEFT',()=>{
            if(!this.jugador2.isDead)this.jugador2.idle()
        })

        this.input.keyboard.on('keydown-RIGHT',()=>{
            if(!this.jugador2.isDead){

                this.jugador2.ORIENTATION = 'right'
                this.jugador2.run()
            }
        })

        this.input.keyboard.on('keyup-RIGHT',()=>{
            if(!this.jugador2.isDead){

                this.jugador2.idle()
            }
        })

        

        this.input.keyboard.on('keydown-M',()=>{
            if(!this.jugador2.isDead){
                this.jugador2Golpe.play()
                this.jugador2.attack()
                if (this.physics.overlap(this.jugador1.sprite,this.jugador2.attackHitbox)){
                    
                    this.jugador1.recibirDanio(this.jugador2.damage)
                }
            }
            if(this.jugador1.isDead){
                    if(!this.jugador2.hasPlayedFinalSound){
                        this.jugador2GolpeFinal
                        this.jugador2.hasPlayedFinalSound = true
                    }
                    this.scene.start(SCENE_KEYS.GAME_OVER,{userName:"hola, cambiar",charaName: this.jugador2.ASSET_KEY.NAME, chara: this.jugador2, personajes: {personaje1:this.chara1,personaje2:this.chara2}})
                   
                    
            }
           
        })

        

       
        
    }

    
    anadirEfectosSonido(){
        if(this.chara1 === CHARACTER_ASSETS_KEYS.VIKING){


            
            this.jugador1Golpe = this.sound.add(CHARACTER_ASSETS_KEYS.VIKING.EFFECTS.GOLPE)
            this.jugador1GolpeFinal = this.sound.add(CHARACTER_ASSETS_KEYS.VIKING.EFFECTS.GOLPE_FINAL)

            this.jugador2Golpe = this.sound.add(CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.EFFECTS.GOLPE)
            this.jugador2GolpeFinal = this.sound.add(CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.EFFECTS.GOLPE_FINAL)

        }else{
            
            this.jugador1Golpe = this.sound.add(CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.EFFECTS.GOLPE)
            this.jugador1GolpeFinal = this.sound.add(CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.EFFECTS.GOLPE_FINAL)

            this.jugador2Golpe = this.sound.add(CHARACTER_ASSETS_KEYS.VIKING.EFFECTS.GOLPE)
            this.jugador2GolpeFinal = this.sound.add(CHARACTER_ASSETS_KEYS.VIKING.EFFECTS.GOLPE_FINAL)

        }

            
        
    }

}

