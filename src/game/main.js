

import { FightScene } from './scenes/FightScene';
import { GameOver } from './scenes/GameOver';
import { Preloader } from './scenes/Preloader';
import { SelectChara } from './scenes/SelectChara';
import Phaser from 'phaser';

const config = {
    type: Phaser.CANVAS,
    pixelArt: true,
    
    backgroundColor: '#028af8',
    scale:{
        parent: 'game-container',
        width: 1920,
        heigth: 700,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Preloader,
        SelectChara,
        FightScene,
        GameOver

    ],
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 600},
            debug: false
        }
    }
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });
}

export default StartGame;
