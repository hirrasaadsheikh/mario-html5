export default class CountUp extends Phaser.Events.EventEmitter {
  private timedEvent: Phaser.Time.TimerEvent
  private scene: Phaser.Scene
  private current: number
  private delay = 1000

  constructor(scene: Phaser.Scene) {
    super()
    this.scene = scene
  }

  start() {
    // Timer starts at 0
    this.current = 0
    this.timedEvent?.remove()
    this.timedEvent = this.scene.time.addEvent({
      delay: this.delay,
      callback: () => {
        //Time incremented
        this.current++;
        this.emit('interval', this.current)
      },
      loop: true,
    })

    return this
  }
}
