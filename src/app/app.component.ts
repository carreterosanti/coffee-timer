import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
      this.timer = setInterval(() => {
        this.seconds++;

        if (this.seconds > 59) {
          this.seconds = 0;
          this.minutes++;
        }

        if (this.seconds == 4) {
          FourMinutesNotif.play();
          FourMinutesNotif.pause();
        }
        if (this.seconds == 9) {
          NineMinutesNotif.play();
          FourMinutesNotif.play();
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
