import { BACKGROUND_ASSETS_KEYS } from '../../../public/assets/assets-keys';
import { SCENE_KEYS } from './scene-keys';
import { Scene } from 'phaser';

export class GameOver extends Scene{
    constructor (){
        super('GameOver');

    }
    init(data){
        this.personajes = data.personajes
        this.userName = data.userName
        this.charaName = data.charaName
        this.currentHealth = data.chara.currentHealth
    }
    
    create (){
        console.log(this.personajes)   
        this.add.image(this.scale.width/2,0,BACKGROUND_ASSETS_KEYS.FOREST).setScale(2.1)


        this.add.text(200, 200,"Fin del Juego",{
            fontSize:40
        })

        this.add.text(200, 300,"Nombre de Usuario: "+this.userName,{
            fontSize:40
        })

        this.add.text(200, 400,"Personaje Ganador: "+this.charaName,{
            fontSize:40
        })

        this.add.text(200, 500,"Vida Restante: "+this.currentHealth,{
            fontSize:40
        })


        // Botón de volver a Jugar
        this.botonJugar = this.add.text(this.cameras.main.width/2, this.cameras.main.height - 150, "VOLVER JUGAR", {
            fontSize: 38,
            backgroundColor: "#fff",
            padding: { x: 20, y: 10 },
            color: "#000"
        }).setOrigin(0.5).setInteractive()

        this.botonJugar.on('pointerdown', () => {
            this.scene.start(SCENE_KEYS.SELECT_CHARA); 
        });

        // Botón de Menu principal
        this.botonJugar = this.add.text(this.cameras.main.width/2, this.cameras.main.height-90, "VOLVER AL MENU PRINCIPAL", {
            fontSize: 38,
            backgroundColor: "#fff",
            padding: { x: 20, y: 10 },
            color: "#000"
        }).setOrigin(0.5).setInteractive()

        this.botonJugar.on('pointerdown', () => {
            
             window.location.href = '/'
        });
    }


}
