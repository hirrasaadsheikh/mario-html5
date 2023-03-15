# Super Mario
## Given Task

### 1.	Change the “skin” of Mario
#### .	Change the look of the main character. You can make it whatever you like (even changing the hue/saturation works). The more different, the better.
### 2.	Invert the Timer in this Mario Game:
#### .	The current timer of the game is a count down, you need to change it to a count up that shows the amount of time spent for one play of the game.
### 3.	Change direction keys:
#### .	Upon pressing the left key, Mario should move right. Upon pressing the right key, Mario should move left. (Invert Controls)
### 4.	Change the background of the game. Make it something of your choice.
### 5.	Add a Game Over sound when the player's lives become zero and the game ends.

## Completed Task 

#### 1) Change the “skin” of Mario
```
In folder src -> scenes -> preloadScene.ts 
- The below line of code was updated and the previous image was replaced with the saturated image ‘mario-sprite2’.
this.load.atlas('atlas', 'assets/mario-sprite2.png', 'assets/mario-sprites.json')
```
#### 2) Invert the timer, 
```
In src folder, go to scripts -> helpers -> countdown.ts,
- In start method there was a line of code this.current--, it was replaced with this.current++ so that it shows the amount of time a user spent on a game and this.current = time is replaced with this.current = 0, so that timer starts from 0.
- changed the “countDown” to “countUp” in scr -> script -> scenes -> mainScene.ts
```
#### 3) Change direction keys:
```
In src-> scripts -> power -> move.ts
We swap the logic that was applied in left key and it was replaced with right key and right key logic was replaced with left key logic. Below is the code: 
if (cursors.left.isDown) { //for left key
  player.setFlipX(false) // Flip horizontally to face the right direction
  player.body.setAccelerationX(ax + (velocity.x < 0 ? -velocity.x * 2 : 0))
}
else if (cursors.right.isDown) { //for right key
  player.setFlipX(true) // Flip to face the left direction
  player.body.setAccelerationX(-ax - (velocity.x > 0 ? velocity.x * 2 : 0))
} 
```
#### 4) Change the background of the game. 
```
 The background color was changed in 
Scripts -> scenes -> games.ts
```

#### 5) Add a Game Over sound when the player's lives become zero and the game ends.
```
The Mario ‘game over’ sound is added. The “game over” dialog box will appear and the game over sound will be played one time till the user press ‘ok’ to restart the game.
The amendments are made in scripts -> scenes -> mainScene.ts
And below is the amended code 
private gameOver() {
  this.sound.play('game-over-sound');
  
  if (window.confirm('GameOver!')) {
    this.restartGame(false);
  }
}
```
### Bonus Task:
```
1)	In src -> scripts -> scenes -> mainScene.ts 
-The “highJump.ts” and “multiplier.ts” was added in a switch statement.
```
```
2) “highJump.ts” file and “scoreMultiplier” files were created in
src -> scripts -> objects -> powerUps
```





