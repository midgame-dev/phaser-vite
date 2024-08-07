import { Game, Types } from 'phaser'
import Preloader from './scenes/Preloader'
import MainScene from './scenes/MainScene'

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'app',
    scene: [Preloader, MainScene],
}

export default new Game(config)
