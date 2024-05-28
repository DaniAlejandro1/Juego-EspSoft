import { Boot } from './scenes/Boot';

import { FightScene } from './scenes/FightScene';
import { Preloader } from './scenes/Preloader';
import Phaser from 'phaser';



// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.CANVAS,
    pixelArt: false,
    
    backgroundColor: '#028af8',
    scale:{
        parent: 'game-container',
        width: 1610,
        heigth: 630,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Preloader,
        FightScene

    ],
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 600},
            debug: true
        }
    }
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });
}

export default StartGame;
