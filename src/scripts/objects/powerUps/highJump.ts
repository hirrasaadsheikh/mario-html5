import { PowerUp } from './index'
import { score } from '../../helpers/decorators'

type Config = {
  scene: Phaser.Scene
  x: number
  y: number
  texture: string
}

export class highJump extends PowerUp {
  body: Phaser.Physics.Arcade.Body

  constructor({ scene, x, y, texture }: Config) {
    super({ scene, x, y, texture })
    // Change coin color to represent high jump power up
    this.setTint(0xff00ff)

    this.body.setSize(16, 16).setOffset(0)

    this.anims.create({
      key: 'high-jump',
      frames: this.anims.generateFrameNames(texture, {
        prefix: 'powerup/high-jump',
        start: 1,
        end: 4,
      }),
      frameRate: 15,
      repeat: -1,
      repeatDelay: 0,
    })

    this.anims.play('high-jump')
  }
  @score(1500)
  onOverlap(obj1, obj2) {
// When player overlaps with high jump power up, increase the jump height for a short period of time
    obj2.setJumpHeight(2)
    setTimeout(() => obj2.setJumpHeight(1), 5000)
    super.onOverlap(obj1, obj2)
  }
}