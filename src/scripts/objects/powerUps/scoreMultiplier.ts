import { PowerUp } from './index'
import Player from '../player'

type Config = {
  scene: Phaser.Scene
  player: Player // add player object
  x: number
  y: number
  texture: string
  type: string
  speed?: number
}

export class ScoreMultiplier extends PowerUp {
  body: Phaser.Physics.Arcade.Body
  speed: number
  type: string
  player: Player // add player object

  constructor({ scene, player, x, y, texture, type, speed = 50 }: Config) {
    super({ scene, x, y, texture })

    this.setTexture(texture, 'powerup/' + type)
    this.body.setSize(16, 16)
    this.speed = speed
    this.type = type
    this.player = player // store player object
  }

  onDisplay() {
    this.body.setAllowGravity(true).setBounce(1, 0).setVelocityX(this.speed)
  }  onOverlap() {
    this.scene.sound.playAudioSprite('sfx', this.type === '1up' ? 'smb_1-up' : 'smb_powerup')
    this.player.applyPowerUp(this) // apply power up to player
    this.destroy()
  }

  startTimer(param: () => void) {

  }
}
