import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-timer',
  templateUrl: './coffee-timer.component.html',
  styleUrls: ['./coffee-timer.component.scss'],
})
export class CoffeeTimerComponent {
  minutes = 0;
  seconds = 0;

  timer: any;
  running: boolean = false;

  startPauseTimer() {
    if (this.running) {
      clearInterval(this.timer);
      this.running = false;
    } else {
      this.running = true;
      let FourMinutesNotif = new Audio();
      let NineMinutesNotif = new Audio();
      FourMinutesNotif.src = '../assets/sounds/4-minutes.wav';
      NineMinutesNotif.src = '../assets/sounds/9-minutes.wav';
      FourMinutesNotif.load();
      NineMinutesNotif.load();
      FourMinutesNotif.loop = false;
      NineMinutesNotif.loop = false;
      this.timer = setInterval(() => {
        this.seconds++;

        if (this.seconds > 59) {
          this.seconds = 0;
          this.minutes++;
        }

        if (this.minutes == 4) {
          FourMinutesNotif.play();
        }
        if (this.minutes == 9) {
          NineMinutesNotif.play();
          this.resetTimer();
        }
      }, 1000);
    }
  }

  resetTimer() {
    clearInterval(this.timer);
    this.minutes = 0;
    this.seconds = 0;
    this.running = false;
  }

  onSwipe(event: any) {
    if (Math.abs(event.deltaY) > 20 || Math.abs(event.deltaY) < -20)
      this.resetTimer();
  }
}
