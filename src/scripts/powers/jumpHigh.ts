import { Power, TargetObject } from './index'


export class JumpHigh implements Power {
  private current: number = 0
  private duration: number = 10000
  private jumpStrength: number = 1.5
  private jumpVelocity: number = 500 //default jump

  public update(time: number, delta: number, targetObject: TargetObject) {
    this.current += delta
    if (this.current >= this.duration) {
      targetObject.powers.remove(JumpHigh)
    }
  }

  public beforeRemove(targetObject: TargetObject) {
    targetObject.body.setVelocityY(this.jumpVelocity)
  }

  public onApply(targetObject: TargetObject) {
    this.jumpVelocity = targetObject.body.velocity.y
    targetObject.body.setVelocityY(-this.jumpVelocity * this.jumpStrength)
  }
}