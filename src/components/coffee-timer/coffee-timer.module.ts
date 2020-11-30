import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeTimerComponent } from './coffee-timer.component';

@NgModule({
  declarations: [CoffeeTimerComponent],
  imports: [CommonModule],
  exports: [CoffeeTimerComponent],
})
export class CoffeeTimerModule {}
