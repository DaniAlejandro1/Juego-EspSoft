import { Scene } from "phaser";
import { SCENE_KEYS } from "./scene-keys";
import { BACKGROUND_ASSETS_KEYS, CHARACTER_ASSETS_KEYS } from "../../../public/assets/assets-keys";

export class SelectChara extends Scene{
    constructor(){
        super('SelectChara');
    }

    create(){
        let seleccion = {jugador1: "",jugador2:""}



        // Agrega el fondo a la escena
        this.add.image(this.scale.width/2, 0, BACKGROUND_ASSETS_KEYS.FOREST).setScale(2.1);
        
        // Agrega el titulo a la escena
        this.add.text(this.cameras.main.width/2, 100, "Selecciona luchador", {
            fontSize: 40
        }).setOrigin(0.5, 0);

        // Agrega Nombre de Jugador 1
        this.add.text((this.cameras.main.width/7) * 1, (this.cameras.main.height/4) * 1, "JUGADOR 1", {
            fontSize: 40
        });

        // Agrega Nombre de Jugador 2
        this.add.text((this.cameras.main.width/7) * 5, (this.cameras.main.height/4) * 1, "JUGADOR 2", {
            fontSize: 40
        });
   
        // Sprite asociado al jugador 1
        this.Jugador1Sprite = this.add.sprite((this.cameras.main.width/7) * 1 + 110, 300, "").setScale(5).setOrigin(0.5, 0).setVisible(false);
        
        // Sprite asociado al jugador 2
        this.Jugador2Sprite = this.add.sprite((this.cameras.main.width/7) * 5 + 110, 300, "").setScale(5).setOrigin(0.5, 0).setVisible(false);
        this.Jugador2Sprite.flipX = true;

        // Variables para verificar la elección de los personajes
        this.jugador1Seleccionado = false;
        this.jugador2Seleccionado = false;

        // Logica de eleccion de personaje
        let jugadorChoosing = 1;
        
        // Agrega retrato con marco del luchador vikingo
        this.VikingPortrait = this.add.image(this.cameras.main.width/2 - 200, this.cameras.main.height / 2 + 50, CHARACTER_ASSETS_KEYS.VIKING.PORTRAIT).setScale(2).setInteractive();
        this.VikingPortrait.on('pointerdown', () => {
            if (jugadorChoosing == 1) {
                this.mostrarAnimacion(CHARACTER_ASSETS_KEYS.VIKING.IDLE, this.Jugador1Sprite);
                this.VikingPortrait.disableInteractive(); // Desactiva el retrato
                jugadorChoosing = 2; // Cambia al jugador 2
                this.jugador1Seleccionado = true;
                seleccion.jugador1 = CHARACTER_ASSETS_KEYS.VIKING
                seleccion.jugador2 = CHARACTER_ASSETS_KEYS.FIRE_WARRIOR
            } else {
                this.mostrarAnimacion(CHARACTER_ASSETS_KEYS.VIKING.IDLE, this.Jugador2Sprite);
                this.VikingPortrait.disableInteractive(); // Desactiva el retrato
                this.jugador2Seleccionado = true;
                seleccion.jugador2 = CHARACTER_ASSETS_KEYS.VIKING
                seleccion.jugador1 = CHARACTER_ASSETS_KEYS.FIRE_WARRIOR
            }
            this.verificarSeleccion();
        });

        this.add.graphics()
            .lineStyle(2, 0xffffff, 1)
            .strokeRect(this.cameras.main.width/2 - 260, this.cameras.main.height / 2 - 10, this.VikingPortrait.width * 2, this.VikingPortrait.height * 2);
        
        // Agrega retrato con marco del luchador de fuego
        this.WarriorPortrait = this.add.image(this.cameras.main.width/2 + 200, this.cameras.main.height / 2 + 50, CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.PORTRAIT).setScale(2).setInteractive();
        this.WarriorPortrait.on('pointerdown', () => {
            if (jugadorChoosing == 1) {
                this.mostrarAnimacion(CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.IDLE, this.Jugador1Sprite);
                this.WarriorPortrait.disableInteractive(); // Desactiva el retrato
                jugadorChoosing = 2; // Cambia al jugador 2
                this.jugador1Seleccionado = true;
            } else {
                this.mostrarAnimacion(CHARACTER_ASSETS_KEYS.FIRE_WARRIOR.IDLE, this.Jugador2Sprite);
                this.WarriorPortrait.disableInteractive(); // Desactiva el retrato
                this.jugador2Seleccionado = true;
            }
            this.verificarSeleccion();
        });

        this.add.graphics()
            .lineStyle(2, 0xffffff, 1)
            .strokeRect(this.cameras.main.width/2 + 130, this.cameras.main.height / 2 - 10, this.WarriorPortrait.width * 2, this.WarriorPortrait.height * 2);    


        // Botón de Jugar, inicialmente deshabilitado
        this.botonJugar = this.add.text(this.cameras.main.width/2, this.cameras.main.height - 100, "JUGAR", {
            fontSize: 40,
            backgroundColor: "#fff",
            padding: { x: 20, y: 10 },
            color: "#000"
        }).setOrigin(0.5).setInteractive().setVisible(false);

        this.botonJugar.on('pointerdown', () => {
            // Lógica para empezar el juego
            this.scene.start(SCENE_KEYS.FIGHT_SCENE,seleccion); // Cambia a la escena correspondiente
        });
    }

    verificarSeleccion() {
        if (this.jugador1Seleccionado && this.jugador2Seleccionado) {
            this.botonJugar.setVisible(true);
        }
    }

    mostrarAnimacion(chara, sprite){
        this.anims.create({
            key: chara,
            frames: this.anims.generateFrameNumbers(chara, { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
        sprite.setVisible(true);
        sprite.play(chara);
    }
}
