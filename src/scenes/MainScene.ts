import { Scene } from 'phaser'

export default class MainScene extends Scene {
    constructor() {
        super('MainScene')
    }

    create() {
        // background gradient
        this.add
            .graphics()
            .fillGradientStyle(0x8f69ff, 0x8f69ff, 0x5335ab, 0x5335ab)
            .fillRect(0, 0, 800, 600)

        // description text
        this.add
            .text(400, 500, 'This is my Phaser + Vite project!', {
                fontFamily: 'sans-serif',
                fontSize: '32px',
            })
            .setOrigin(0.5)

        // animated planet sprite
        const planet = this.add.image(400, 250, 'planet').setScale(0.15)

        this.tweens.add({
            targets: planet,
            angle: { from: -5, to: 10 },
            duration: 2000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut',
        })
    }
}
