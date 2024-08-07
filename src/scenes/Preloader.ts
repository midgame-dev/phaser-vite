import { Scene } from 'phaser'

export default class Preloader extends Scene {
    constructor() {
        super('Preloader')
    }

    preload() {
        this.load.setPath('assets')
        this.load.image('planet', 'phaser-planet-web.png')
    }

    create() {
        // as soon as averything is loaded, start the actual game
        this.scene.start('MainScene')
    }
}
